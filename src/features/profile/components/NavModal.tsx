import { SlArrowRight } from "react-icons/sl";
import { useDesignerContext } from "../../../hooks/useDesignerContext";
import { useSignout } from "../../../hooks/useSignout";
import { Buttons } from "../../../shared/components/Buttons";
import ModalLayout from "../../../shared/layout/ModalLayout";
import {
  AdminNavLinks,
  NavLinks,
} from "../../../shared/utils/constants/constants";
import { getInitials } from "../../../shared/utils/helpers/getInitials";

// import { RouteLinks } from "./userModal/RouteLinks";
import { RouteLinks } from "./RouteLinks";

export const NavModal = () => {
  const [signout] = useSignout();
  const { toggleNav, user, setToggleNav, setAppModals } =
    useDesignerContext() as DesignerContextProps;
  console.log(user);
  const actionButton = (type: "LOGIN" | "REGISTER") => {
    setToggleNav({ modalType: "pass" });
    if (type === "LOGIN") setAppModals((prev) => ({ ...prev, signin: "OPEN" }));
    else if (type === "REGISTER")
      setAppModals((prev) => ({ ...prev, signup: "OPEN" }));
    else return;
  };
  return (
    <ModalLayout
      modalType={toggleNav.modalType}
      expected="openNavModal"
      enlarge={true}
      noFullScreen={false}
      classNames="md:hidden"
      extraClasses="px-3 py-1 top-0 border flex flex-col gap-y-6"
    >
      <header
        className={`${
          user.isSignedIn ? "flex mt-3 mb-0" : "hidden"
        } items-center justify-between bg-white px-4 py-3 rounded-lg shadow`}
      >
        <div className="flex items-center gap-x-4">
          <p
            className={`relative after:absolute after:bg-[#FF3E30] after:content-[""] after:w-2 after:h-2 after:rounded-full after:right-1 after:top-1 font-bold text-3xl bg-[#D69203] text-white rounded-full w-14 h-14 grid place-content-center`}
          >
            {getInitials(
              (user.first_name as string) ?? user.email?.split("@")[0]
            )}
          </p>
          <div className="flex flex-col font-semibold gap-y-1">
            <h3 className="text-2xl font-medium whitespace-pre-wrap">
              Hi, {user.username}
            </h3>
            <span className="text-[#A8A8A8] font-normal text-sm">
              Welcome back
            </span>
          </div>
        </div>
        <Buttons
          onClick={() => setToggleNav({ modalType: "userNavModal"})}
          px=""
          py=""
          classNames="rounded-full grid place-content-center w-8 h-8 hover:bg-gray-200 active:bg-gray-100 transition-colors"
        >
          <SlArrowRight className="text-xl" />
        </Buttons>
      </header>

      {user.isAdmin ? (
        <RouteLinks
          setToggleNav={setToggleNav}
          values={AdminNavLinks}
          user={user}
        />
      ) : (
        <>
          <RouteLinks
            setToggleNav={setToggleNav}
            values={NavLinks}
            user={user}
            classNames="mt-2"
          />
        </>
      )}

      {user.isSignedIn ? (
        <Buttons
          onClick={signout}
          px=""
          py=""
          classNames="self-center mt-14 rounded-lg font-semibold bg-[#8B4513] text-white grid place-content-center w-[95%] md:w-1/2 py-3 hover:bg-[#8B4413] active:bg-[#8B4513] transition-colors"
        >
          Sign out
        </Buttons>
      ) : (
        <div className="flex flex-col gap-y-4 mt-12">
          <Buttons
            onClick={() => actionButton("REGISTER")}
            px=""
            py=""
            classNames="rounded-[8px] w-full font-semibold bg-[#8B4513] text-white grid place-content-center w-[95%] md:w-1/2 py-3 hover:bg-[#8B4413] active:bg-[#8B4513] transition-colors"
          >
            Register
          </Buttons>
          <Buttons
            onClick={() => actionButton("LOGIN")}
            px=""
            py=""
            classNames="rounded-[8px] w-full font-semibold border-[1px] border-[#8B4513] text-[#8B4513] bg-white grid place-content-center w-[95%] md:w-1/2 py-3 hover:bg-opacity-80 active:bg-opacity-90 transition-colors"
          >
            Login
          </Buttons>
        </div>
      )}
    </ModalLayout>
  );
};

