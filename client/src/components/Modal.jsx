import { Link } from "react-router-dom";
import navList from "../helpers/navlist";
const Modal = () => {
  return (
    <div className="bg-slate-400 rounded-lg mx-auto my-auto w-1/2 p-3">
      <div className="flex flex-col gap-2 items-center">
        {navList.map((item, index) => {
          return (
            <Link className="font-poppins hover:translate-y-1 hover:opacity-70 tracking-wider leading-6">
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
