import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineLogout, AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../context/appcontext";
const SmallSideBar = () => {
  const [sideBar, hideSideBar] = useState(false);
  const closeSideBar = () => {
    hideSideBar(!sideBar);
  };
  const { user, logOut } = useGlobalContext();
  return (
    <div className=" flex flex-col  items-center p-2">
      <button
        onClick={closeSideBar}
        className="flex justify-end items-end absolute top-10 left-4"
      >
        <AiOutlineClose className="w-[30px] h-[30px] fill-dimWhite hover:rotate-6" />
      </button>
      <span>
        <BiUserCircle className="bg-slate-400 w-20 h-20 rounded-full object-contain" />
      </span>
      <p className="p-2 mt-2 text-dimWhite tracking-wider font-poppins">
        {" "}
        welcome{" "}
        <span className="text-gray-100 tracking-widest">{user.name}</span>
      </p>
      <div className="flex flex-col gap-3 mt-8">
        {dashboardLinks.map((item, index) => {
          return (
            <Link
              key={index}
              className="p-2 capitalize tracking-widest hover:translate-x-3 duration-500 text-gray-200 font-poppins"
              to={item.link}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <button
        onClick={logOut}
        className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 tracking-widest text-base font-poppins -mb-4"
      >
        Logout
      </button>
    </div>
  );
};

export default SmallSideBar;
