import { useEffect } from "react";
import { Home } from "./features/home/HomePage";
import NotFound from "./pages/NotFound";
import Products from "./features/product/components/Products";
import ProductPage from "./features/product/ProductPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { NavModal } from "./features/profile/components/NavModal";
import { DesignerLayout } from "./shared/layout/DesignerLayout";
import { Login } from "./shared/modals/Login";
import { initNavModals } from "./shared/utils/helpers/initialVariables";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDesignerContext } from "./hooks/useDesignerContext";
import { UserNavModal } from "./features/profile/components/Bio";
import { Notifications } from "./features/notification/components/Notiications";
import { Registration } from "./shared/modals/Registration";
import {
  switchModals,
  toggleAttributes,
} from "./shared/utils/helpers/toggleModalStates";
import { Measurements } from "./shared/modals/Measurements";
import { Carts } from "./features/cart/components/Cart";
import { CartPreview } from "./features/cart/components/CartPreview";
import PaymentPrompt from "./shared/components/PaymentPrompt";
import AboutUs from "./features/about/AboutPage";
import { AdminAccountSetting } from "./features/admin/components/AdminAccountSetting";
import { PaymentCheckout } from "./shared/components/PaymentCheckout";
import { Orders } from "./features/order/Orders";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./shared/layout/DashboardLayout";
import AdminOrders from "./pages/AdminOrders";
import UploadProduct from "./pages/UploadProduct";

let prevPathname = "/";
function App() {
  const { pathname } = useLocation();
  const { appModals, setAppModals, setToggleNav } =
    useDesignerContext() as DesignerContextProps;

  const { signin, signup } = appModals;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (pathname !== prevPathname) {
        setAppModals((prev) => toggleAttributes(prev, "CLOSE") as AppModals);
        setToggleNav(initNavModals);
        prevPathname = pathname;
      } else if (signin === "OPEN") {
        setAppModals(switchModals["signin"]);
        setToggleNav(initNavModals);
      } else if (signup === "OPEN") {
        setAppModals(switchModals["signup"]);
        setToggleNav(initNavModals);
      }
    }
    return () => {
      isMounted = false;
    };
  }, [pathname, signin, signup, setAppModals]);

  return (
    <main className="w-full">
      <Routes>
        <Route path="/" element={<DesignerLayout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductPage />} />
          <Route path="orders" element={<Orders />} />

          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="adminOrders" element={<AdminOrders />} />
            <Route path="uploadProduct" element={<UploadProduct />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* APP MODALS */}
      <UserNavModal />
      <NavModal />
      <Notifications />
      <Measurements />
      <Carts />
      <CartPreview />
      <AdminAccountSetting />
      <PaymentCheckout />

      {/* Authentication Modals */}
      <Login />
      <Registration />

      {/* Modal Prompts */}
      <PaymentPrompt />

      <ToastContainer
        position="top-right"
        autoClose={1300} // Set the autoClose prop to 3000 milliseconds (3 seconds)
        hideProgressBar={true}
        newestOnTop={true}
        closeButton={false}
        rtl={false}
        style={{
          // background: "#4CAF50",
          color: "#FFF",
          width: "60%",
          margin: "3.5rem auto",
        }}
      />
    </main>
  );
}

export default App;
