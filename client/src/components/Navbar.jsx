import { Link, NavLink } from "react-router-dom";
import navList from "../helpers/navlist";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";
const Navbar = () => {
  const [links, hideLinks] = useState(true);
  const [modal, showModal] = useState(true);
  return (
    <>
      <header className="p-2">
        <nav className="flex  justify-between items-center">
          <div className="flex justify-center items-center">
            <button>toggle sidebar</button>
            <h4 className="text-base font-not text-white">Welcome Tim</h4>
            <Link
              to="/"
              className="mx-4 bg-blue-500 p-1 rounded-xl tracking-widest capitalize text-white hover:opacity-80"
            >
              logout
            </Link>
          </div>

          <div>
            <NavLink className="flex gap-4 p-2">
              {navList.map((item, index) => {
                return (
                  <Link
                    to={item.link}
                    className="capitalize  rounded-md hover:opacity-70 hover:translate-y-1 p-1 font-poppins tracking-wider leading-6 text-white"
                    key={index}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <button
                onClick={() => showModal(!modal)}
                type="button"
                className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden xl:hidden md:hidden"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {modal ? (
                  <FaTimes className="block h-5 w-5" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </NavLink>
          </div>
          <div>
            <h5>progress goes here</h5>
          </div>
        </nav>
        {modal && <Modal />}
      </header>
    </>
  );
};

export default Navbar;
