import React from "react";
import SideBarComp from "../NavComp/SideBarComp";
import Navbar from "../NavComp/Navbar";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex flex-auto h-screen">
        {userInfo && <SideBarComp />}
        <div className="grow">
          <Navbar />
          <div className="m-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
