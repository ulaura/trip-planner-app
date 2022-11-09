import { Outlet } from "react-router-dom";
import PageHeader from "./PageHeader/PageHeader";

const PageHeaderLayout = () => {
  return (
    <>
      <PageHeader />
      <Outlet/>
    </>
  );
};

export default PageHeaderLayout;
