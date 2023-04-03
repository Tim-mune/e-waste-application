import { useState } from "react";
import { Button, DashboardNav } from "../components";
import { useGlobalContext } from "../context/appcontext";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import dashboardLinks from "../helpers/dashBoard";

import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [sideBar, hideSideBar] = useState(false);
  const closeSideBar = () => {
    hideSideBar(!sideBar);
  };
  const { user, logOut, modal } = useGlobalContext();
  return (
    <section className="flex duration-300 ">
      <main className="w-2/12 lg:block md:block bg-cyan-600 ss:hidden sm:hidden xs:hidden">
        <aside
          className=" flex flex-col items-center
        justify-around h-screen "
        >
          {/* profile information goes here */}
          <div className="flex flex-col">
            <span>
              <BiUserCircle className="fill-white w-20 h-20 rounded-full object-contain" />
            </span>
            <p className=" mt-1 text-dimWhite tracking-wider font-poppins">
              <span className="text-gray-100 tracking-widest">{user.name}</span>
            </p>
          </div>

          {/* Links begin here */}
          <div className="flex flex-col justify-between items-start mb-10">
            {dashboardLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="p-4 capitalize tracking-widest hover:translate-x-3 duration-500 text-gray-200 font-poppins active:text-gray-900"
                  to={item.link}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          {/* links end here */}
          <div className="flex">
            <button
              onClick={logOut}
              className="bg-blue-300 text-white py-1 px-2 rounded-lg hover:bg-blue-100 tracking-widest text-base font-poppins -mb-4 "
            >
              <AiOutlineLogout className="w-[30px] h-[30px] fill-gray-800 hover:rotate-6" />
            </button>
          </div>
        </aside>
      </main>
      <main className="w-10/12 bg-cyan-700 min-h-screen xs:w-full sm:w-full duration-300 transition ease-linear">
        <DashboardNav />
        {!modal && <Outlet />}
      </main>
    </section>
  );
};

export default Dashboard;
