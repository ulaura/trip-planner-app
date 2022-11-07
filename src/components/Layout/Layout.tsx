import { Outlet } from "react-router-dom";
import PageFooter from "./PageFooter/PageFooter";
import PageHeader from "./PageHeader/PageHeader";

const Layout = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </>
  );
};

export default Layout;
