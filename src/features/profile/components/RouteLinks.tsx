import { useNavigate } from "react-router-dom";

type IRouteLinks = {
  values: {
    name: string;
    link: string;
  }[];
  user: User;
  setToggleNav: React.Dispatch<React.SetStateAction<ToggleOption>>;
  classNames?: string;
};
export const RouteLinks = ({ values, setToggleNav, user, classNames }: IRouteLinks) => {
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col gap-y-3 font-semibold w-full bg-white rounded-lg shadow ${classNames}`}>
      {values?.map((link) =>
        (link.name.startsWith("Orders") || link.name.startsWith("Manage")) &&
        !user.isSignedIn ? null : (
          <div
            key={link.name}
            onClick={() => {
              setToggleNav({ modalType: "pass" });
              navigate(link.link);
            }}
            className="font-medium  px-4 py-5  text-fdt-grey-darker text-lg cursor-pointer hover:scale-[0.99] transition-all w-full [&:not(:last-child)]:border-b border-b-fdt-grey-normal"
          >
            {link.name}
          </div>
        )
      )}
    </div>
  );
};

export default RouteLinks;
