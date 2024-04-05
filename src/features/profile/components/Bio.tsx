import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

import { ChangeEvent, useEffect, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { toast } from "react-toastify";
import { useDesignerContext } from "../../../hooks/useDesignerContext";
import ModalLayout from "../../../shared/layout/ModalLayout";
import {
  MagicNumbers,
  UserNavigation,
} from "../../../shared/utils/constants/constants";
import {
  deleteImage,
  imageUpload,
} from "../../../shared/utils/helpers/imageMutation";
import {
  initAppModals,
  initAppState,
  initUser,
} from "../../../shared/utils/helpers/initialVariables";
import { sanitizeEntries } from "../../../shared/utils/helpers/sanitizeEntries";
import { LoadingComp } from "../../../shared/components/LoadingComp";
import { Buttons } from "../../../shared/components/Buttons";
import UserDetailForm from "./BioEdit";
import UserDetails from "./UserDetails";

type ActiveModalType = "UserNavModal" | "Profile";
export const UserNavModal = () => {
  const { toggleNav, user, setToggleNav, setAppModals } =
    useDesignerContext() as DesignerContextProps;
  const [appState, setAppState] = useState<AppStateType>(initAppState);
  const [userDetails, setUserDetails] = useState<User>(initUser);
  const [toggleModal, setToggleModal] =
    useState<ActiveModalType>("UserNavModal");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const dp = (event.target.files as FileList)[0];
    if (dp.size > MagicNumbers.imageSize) {
      alert(`MAX ALLOWED FILE SIZE 1.4mb`);
    } else {
      // upload image
      setLoading(true);
      imageUpload(dp, "displayPictures")
        .then(async (res) => {
          if (userDetails.file) {
            await deleteImage(userDetails.file, "displayPictures"); //delete image existing image
          }
          setLoading(false);
          setUserDetails((prev) => ({ ...prev, file: res.url }));
        })
        .catch(() => {
          setLoading(false);
          alert("ERROR UPLOADING IMAGE");
        });
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) setUserDetails({ ...user });

    return () => {
      isMounted = false;
    };
  }, [user.email]);

  const { isLoading, isError } = appState;

  const handleSubmit = () => {
    if (isLoading) return;
    setAppState((prev) => ({ ...prev, loading: true }));
    try {
      const result = sanitizeEntries(userDetails);
      console.log(result);

      setAppState((prev) => ({ ...prev, success: true }));
      setUserDetails(initUser);
      toast.success("Profile Updated!!");
      setToggleModal("UserNavModal");
    } catch (error: unknown) {
      console.log(error);
      setAppState((prev) => ({ ...prev, isError: true }));
      toast.error("error message");
    } finally {
      setAppState((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    if (!isError) return;
    const timeoutId = setTimeout(() => {
      setAppState((prev) => ({ ...prev, isError: false }));
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isError]);

  return (
    <ModalLayout
      modalType={toggleNav.modalType}
      expected="userNavModal"
      enlarge={true}
      extraClasses="sm:shadow-2xl h-[100vh] w-full flex flex-col items-center"
    >
      <header
        className={`flex ${
          toggleModal !== "Profile" ? "justify-between" : "justify-center"
        } w-full  p-3 my-2 items-center`}
      >
        {toggleModal !== "Profile" && (
          <Buttons
            onClick={() => {
              setToggleNav({ modalType: "openNavModal" });
              setAppModals(initAppModals);
            }}
            px=""
            py=""
            classNames="rounded-full transition-colors"
          >
            <GoArrowLeft className="text-2xl" />
          </Buttons>
        )}

        <h3 className="text-xl font-medium  self-center">Profile</h3>

        <div
          onClick={() => setToggleModal("Profile")}
          className={`${
            toggleModal === "Profile" ? "hidden" : "block"
          }  hover:bg-slate-200 active:bg-inherit gap-x-1 transition-colors p-1 cursor-pointer z-10 rounded-sm font-semibold flex items-center w-fit`}
        >
          <span className="underline text-sm text-fdt-grey-dark font-Roboto font-normal">
            edit
          </span>
          <FiEdit3 className="text-xl text-fdt-grey-dark" />
        </div>
      </header>

      <div className="flex flex-col gap-y-3 px-3 py-1 font-medium w-full">
        {user.isAdmin ? (
          <section className="bg-red-500 flex flex-col">
            <label
              htmlFor={toggleModal === "Profile" ? "adminProfile" : ""}
              className="mb-4 self-center relative  rounded-full"
            >
              <figure
                className={`${
                  toggleModal === "Profile" ? "cursor-pointer" : ""
                } w-full h-55 flex flex-col bg-gray-100  gap-1 justify-between items-between`}
              >
                {userDetails.file ? (
                  <img
                    src={'/aboutus'}
                    alt="admin dp"
                    className="minw-20 min-h-20 rounded-full object-cover"
                  />
                ) : null}

                <caption className="bg-green-500">
                  {toggleModal === "Profile" ? (
                    <span className="text-gray-600 underline cursor-pointer">
                      edit
                    </span>
                  ) : (
                    "King Klass"
                  )}
                </caption>

                <LoadingComp isLoading={loading} />
              </figure>
              {toggleModal === "Profile" ? (
                <input
                  type="file"
                  id="adminProfile"
                  onChange={handleFile}
                  accept="image/*"
                  hidden
                  className="absolute top-5"
                />
              ) : null}
            </label>
          </section>
        ) : null}
        {toggleModal === "Profile" ? (
          // for Edit profile view
          <UserDetailForm
            userDetails={userDetails}
            disabled={false}
            setUserDetails={setUserDetails}
          />
        ) : (
          // for profile view
          <UserDetails
            firstName={userDetails.first_name}
            lastName={userDetails.last_name}
            email={userDetails.email}
            mobileNumber={userDetails.phone_no}
            username={userDetails.username}
          />
        )}
      </div>

      {toggleModal === "Profile" ? (
        <Buttons
          onClick={handleSubmit}
          px=""
          py=""
          isLoading={isLoading}
          classNames={`absolute left-3 ${
            user.isAdmin ? "bottom-14" : "bottom-28"
          } rounded-md mt-10 h-12 font-semibold bg-[#8B4513] text-white grid place-content-center w-[95%] md:w-1/2 py-3`}
        >
          Save
        </Buttons>
      ) : (
        <RouteLinks values={UserNavigation} classNames="mt-8 w-[95%] mx-3" />
      )}
    </ModalLayout>
  );
};

type IRouteLinks = {
  values: {
    name: string;
    link: string;
  }[];

  classNames?: string;
};
const RouteLinks = ({ values, classNames }: IRouteLinks) => {
  const { setToggleNav, user } = useDesignerContext() as DesignerContextProps;

  return (
    <div
      className={`bg-white shadow  rounded-lg flex flex-col font-montserrat text-xl text-fdt-grey-darker font-medium gap-y-3 ${
        user.isAdmin ? "gap-y-2 mt-0 px-3" : "gap-y-4 mt-1 p-3"
      }  font-semibold text-sm  ${classNames}`}
    >
      {values?.map((link) => (
        <div key={link.name} className="py-2">
          {link.name === "My Measurement" ? (
            <p
              onClick={() =>
                setToggleNav((prev) => ({
                  ...prev,
                  modalType: "measurements",
                  prevModal: "userNavModal",
                }))
              }
              className={`${
                user.isAdmin ? "hidden" : "flex"
              } hover:bg-gray-100 transition-colors py-1 items-center justify-between cursor-pointer`}
            >
              {link.name}
            </p>
          ) : link.name === "Settings" ? (
            <p
              onClick={() =>
                setToggleNav((prev) => ({
                  ...prev,
                  modalType: "adminAccountSetting",
                  prevModal: "userNavModal",
                }))
              }
              className={`${
                user.isAdmin ? "flex" : "hidden"
              } hover:bg-gray-100 transition-colors py-1 items-center justify-between cursor-pointer`}
            >
              {link.name}
            </p>
          ) : (
            <Link to={link.link} className="">
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
