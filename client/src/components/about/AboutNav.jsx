import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const AboutNav = () => {
  return (
    <div className="flex items-center justify-between sticky top-5 bg-blend-lighten b">
      <div>
        <h5>Smart-waste</h5>
      </div>
      <div className="flex justify-between items-center xs:invisible sm:visible">
        <Link className="">
          <FaTwitter className="fill-white w-[30px] h-[20px]" />
        </Link>
        <Link className="">
          <FaInstagram className="bg-transparent fill-white w-[30px] h-[20px]" />
        </Link>
        <Link className="">
          <FaYoutube className="fill-white w-[30px] h-[20px]" />
        </Link>
        <Link className="">
          <FaPinterestP className="fill-white w-[30px] h-[20px]" />
        </Link>
      </div>
      <div>
        <Link
          to="/"
          className="bg-slate-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4"
        >
          Home?
        </Link>
      </div>
    </div>
  );
};

export default AboutNav;
