import React from "react";
import { User, LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SideBarComp = () => {

  const { userInfo } = useSelector((state) => state.auth);
  const Menus = [
    { title: "Dashboard", path: "/dashboard", src: <LayoutDashboardIcon /> },
    { title: "Profile", path: "/profile", src: <User /> },
  ];

  return (
    <div className="hidden lg:flex  h-screen w-16 flex-col justify-between border-e bg-[#1D232A]">
      <div>
        <div className="inline-flex size-16 items-center justify-center">
          <Link to="/">
            <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              L
            </span>
          </Link>
        </div>

        <div>
          {Menus.map((menu, index) => (
            <div className="px-2">
              <div className="py-4">
                <Link
                  to={menu.path}
                  className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                >
                  <span className="text-2xl">{menu.src}</span>

                  <span
                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 
                  rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                  >
                    {menu.title}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky flex justify-center inset-x-0 bottom-5  p-2">
    
        <div class="avatar cursor-pointer">
          <div class="w-8 rounded-full ring ring-success bg-amber-100 ring-offset-base-100 ring-offset-2">
            <img src={userInfo.avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarComp;
