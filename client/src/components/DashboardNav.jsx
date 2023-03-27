import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/appcontext";

import Modal from "./Modal";
const DashboardNav = () => {
  const { modal, user, showModal } = useGlobalContext();

  return (
    <>
      <nav className="flex justify-between container duration-300 p-2 xl:invisible lg:invisible md:invisible   sticky top-2">
        <div>
          <p className="capitalize">
            welcome <span className="text-teal-200">{user.name}</span>
          </p>
        </div>
        <div>
          <button onClick={showModal}>
            <FaBars className="w-[30px] h-[25px] fill-white hover:rotate-90 hover:scale-125" />
          </button>
        </div>
      </nav>
      {modal && <Modal />}
    </>
  );
};

export default DashboardNav;
