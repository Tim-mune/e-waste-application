import Button from "./Button";
import { Logo } from "../assets";
const LandingHeader = () => {
  return (
    <header className="">
      <nav className="flex justify-between items-center">
        <div className="p-2 flex">
          <img
            src=""
            alt="logo"
            className="w-[150px] h-[70px] border border-none rounded-2xl"
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className=" text-white font-semibold font-not capitalize">
            Smart waste
          </h3>
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;
