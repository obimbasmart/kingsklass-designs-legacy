import { Link, Outlet, useLocation } from "react-router-dom";
import HomeLayout from "./HomeLayout";

export default function DashboardLayout() {
  const { pathname } = useLocation();
  const AdminNavLinks = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Upload product", link: "/uploadProduct" },
    { name: "Orders", link: "/adminOrders" },
    { name: "Customers", link: "/customers" },
  ];

  return (
    <HomeLayout>
      <div className="flex gap-x-6 w-full h-full overflow-hidden">
        <aside className="hidden bg-[#8B4513] md:flex sticky top-0 flex-col h-[91vh] px-3 pt-5 text-[14px] gap-y-2 whitespace-nowrap border-0 border-r-[1px]">
          {AdminNavLinks.map((nav) => (
            <Link
              to={nav.link}
              key={nav.name}
              className={`${
                nav.link === pathname ? "bg-[#8B4513] text-white" : ""
              } py-2 px-1 text-left min-w-36 rounded-[3px]`}
            >
              {nav.name}
            </Link>
          ))}
        </aside>
        <div className="w-full">
          <Outlet />
          {/* <CgMenuGridO className="fixed top-[25%] h-14 w-6 bg-[#6E6E6E] rounded-r-md" /> */}
        </div>
      </div>
    </HomeLayout>
  );
}
