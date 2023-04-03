import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/appcontext";
import dashboardLinks from "../helpers/dashBoard";
const Modal = () => {
  const { showModal, logOut } = useGlobalContext();
  return (
    <div
      className={`bg-cyan-600 w-5/6 h-[400px] mx-auto my-auto rounded-lg lg:invisible xl:invisible md:invisible sm:invisible mt-20 `}
    >
      <div className="flex flex-col gap-2 items-center min-h-full justify-evenly">
        {dashboardLinks.map((item, index) => {
          return (
            <Link
              key={index}
              onClick={showModal}
              to={item.link}
              className="font-poppins hover:rotate-2 hover:translate-y-2 hover:opacity-70 tracking-widest leading-6 text-white text-xl z-50 active:text-red-600 "
            >
              {item.name}
            </Link>
          );
        })}
        <button
          onClick={logOut}
          className="bg-blue-300 text-white py-1 px-2 rounded-lg hover:bg-blue-100 tracking-widest text-base font-poppins -mb-4 "
        >
          <AiOutlineLogout className="w-[30px] h-[30px] fill-gray-800 hover:rotate-6" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
