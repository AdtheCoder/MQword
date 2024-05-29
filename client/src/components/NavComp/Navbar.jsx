import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return (
    <div className="navbar bg-base-100 px-4 border-b">
      <div className="flex-1 ">
        <p className="text-xl">MQword</p>
      </div>
      <div className="flex-none">
        <div>
          <p className="text-sm">{userInfo?.name}</p>
          <p className="text-sm">{userInfo?.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
