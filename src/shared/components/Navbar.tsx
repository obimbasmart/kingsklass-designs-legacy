import { useCallback, useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDesignerContext } from "../../hooks/useDesignerContext";
import { KingKlass } from "../assets/svgs/Logo";
import { initAppModals } from "../utils/helpers/initialVariables";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HomeNavLinks } from "../utils/constants/constants";
import { GoBell } from "react-icons/go";
import { MdClear, MdKeyboardArrowDown } from "react-icons/md";
import { getInitials } from "../utils/helpers/getInitials";
import { DropdownModal } from "./DropdownMenu";


export default function Navbar() {
  const [username, setUsername] = useState<string>("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const { toggleNav, user, setToggleNav, setAppModals } =
    useDesignerContext() as DesignerContextProps;

  const iconClass = useCallback((type: "Burger" | "Cancel") => {
    return `${type} cursor-pointer text-3xl hover:opacity-70 active:opacity-100 transition-opacity flex-none md:hidden`;
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      setUsername((user.first_name as string) ?? user.email?.split("@")[0]);

    return () => {
      isMounted = false;
    };
  }, [user.first_name, user.email]);

  const toggleModal = (type: "open" | "close") => {
    if (type === "open") {
      setToggleNav({ modalType: "openNavModal" });
    } else {
      setToggleNav({ modalType: "pass" });
    }
    setAppModals(initAppModals);
  };

  return (
    <header className="mb-0 z-[9999] bg-[#F8F8F8] lg:shadow-sm rounded-b-sm w-full md:px-8 px-6 py-4 fixed top-0 flex items-center justify-between">
      <>
        {toggleNav.modalType === "openNavModal" ? (
          <MdClear
            onClick={() => toggleModal("close")}
            className={iconClass("Cancel")}
          />
        ) : (
          <RxHamburgerMenu
            onClick={() => toggleModal("open")}
            className={iconClass("Burger")}
          />
        )}
        <Link to={"/"}>
          <KingKlass size={{ width: "54", height: "24" }} />
        </Link>
        {
        
        toggleNav.modalType === 'openNavModal' || toggleNav.modalType === "userNavModal" ? (
          <GoBell
          onClick={() => {
            user.isSignedIn
              ? setToggleNav({ modalType: "notifications" })
              : setAppModals((prev) => ({ ...prev, signin: "OPEN" }));
          }}
            className={`mr-0 cursor-pointer text-3xl hover:opacity-70 active:opacity-100 transition-opacity flex-none`}
          />
        ) : (
          <BsCart3
            onClick={() =>
              setToggleNav((prev) => ({
                modalType: prev.modalType === "carts" ? "pass" : "carts",
              }))
            }
            className={`md:hidden ${
              toggleNav.modalType !== "notifications"
                ? "visible"
                : "invisible"
            } cursor-pointer text-3xl hover:opacity-70 active:opacity-100 transition-opacity flex-none`}
          />
        )}
        
        
        
        
        {<div className="hidden md:flex justify-between items-center flex-none w-[55%] text-sm">
          {HomeNavLinks?.map((nav) =>
            nav.name.startsWith("Contact") ? (
              <a
                href={nav.link}
                key={nav.name}
                className={`hover:text-gray-600 flex flex-col items-center font-medium ${
                  pathname === nav.link ? "font-bold" : ""
                } `}
              >
                {nav.name}
                <div
                  className={`${
                    pathname === nav.link ? "scale-[1]" : "scale-0"
                  } w-1.5 h-1.5 rounded-full bg-red-700`}
                />
              </a>
            ) : (
              <div
                key={nav.name}
                onClick={() => navigate(nav.link)}
                className={`hover:text-gray-600 flex flex-col items-center font-medium ${
                  pathname === nav.link ? "font-bold" : ""
                } cursor-pointer`}
              >
                {nav.name}
                <div
                  className={`${
                    pathname === nav.link ? "scale-[1]" : "scale-0"
                  } w-1.5 h-1.5 rounded-full bg-red-700`}
                />
              </div>
            )
          )}
        </div> }

        <div className="hidden relative md:flex items-center">
          {user.isSignedIn ? (
            user.isAdmin ? (
              <GoBell
                onClick={() =>
                  setToggleNav((prev) => ({
                    modalType:
                      prev.modalType === "notifications"
                        ? "pass"
                        : "notifications",
                  }))
                }
                className={`md:mr-2.5 cursor-pointer text-2xl hover:opacity-70 active:opacity-100 transition-opacity flex-none`}
              />
            ) : (
              <BsCart3
                onClick={() =>
                  setToggleNav((prev) => ({
                    modalType: prev.modalType === "carts" ? "pass" : "carts",
                  }))
                }
                className={`md:mr-2.5 ${
                  toggleNav.modalType !== "notifications"
                    ? "visible"
                    : "invisible"
                } cursor-pointer text-3xl hover:opacity-70 active:opacity-100 transition-opacity flex-none`}
              />
            )
          ) : (
            <div />
          )}
          <p
            className={`relative after:absolute after:bg-red-700 after:content-[""] after:w-2 after:h-2 after:rounded-full after:right-0 after:top-1 font-bold text-xl bg-[#8B4513] text-white rounded-full w-10 h-10 grid place-content-center`}
          >
            {user.isSignedIn ? getInitials(username) : ""}
          </p>
          <MdKeyboardArrowDown
            onClick={() => setOpenDropdown((prev) => !prev)}
            className={`text-3xl hover:bg-gray-200 transition-colors cursor-pointer rounded-full ${
              openDropdown ? "rotate-180" : ""
            } transition-transform p-0.5`}
          />

          <DropdownModal
            openDropdown={openDropdown}
            username={username}
            setOpenDropdown={setOpenDropdown}
          />
        </div>
      </>
    </header>
  );
}
