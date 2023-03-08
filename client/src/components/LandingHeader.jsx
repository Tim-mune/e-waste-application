import Button from "./Button";
import { landing } from "../assets";
const LandingHeader = () => {
  return (
    <header className="">
      <nav className="flex justify-between items-center">
        <div className="p-2 flex">
          <img src="" alt="logo" />
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
