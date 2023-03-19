import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/appcontext";
import dashboardLinks from "../helpers/dashBoard";
const Modal = () => {
  const { showModal } = useGlobalContext();
  return (
    <div
      className={`bg-cyan-600 w-5/6 h-[400px] mx-auto my-auto rounded-lg lg:invisible xl:invisible md:invisible sm:invisible mt-20 `}
    >
      <div className="flex flex-col gap-2 items-center min-h-full justify-evenly">
        {dashboardLinks.map((item, index) => {
          return (
            <Link
              onClick={showModal}
              to={item.link}
              className="font-poppins hover:rotate-2 hover:translate-y-2 hover:opacity-70 tracking-widest leading-6 text-white text-xl z-50 "
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
