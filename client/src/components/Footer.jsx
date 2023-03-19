import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="">
      <main className="lg:grid lg:grid-cols-3 lg:grid-flow-col xl:grid xl:grid-cols-3 xl:grid-flow-col justify-center items-center gap-6 xs:flex flex-col text-center">
        <div>
          <h4>contact us</h4>
          <h5>+254734679087</h5>
          <p className="text-white">smartwaste@gmail.com</p>
        </div>
        <div className="">
          <h4>Follow us</h4>
          <div className="flex justify-evenly items-center">
            <Link className="">
              <FaTwitter className="fill-[#1DA1F2] w-[30px] h-[20px]" />
            </Link>
            <Link className="">
              <FaInstagram className="bg-transparent fill-orange-400 w-[30px] h-[20px]" />
            </Link>
            <Link className="">
              <FaYoutube className="fill-[#FF0000] w-[30px] h-[20px]" />
            </Link>
            <Link className="">
              <FaPinterestP className="fill-[#E60023] w-[30px] h-[20px]" />
            </Link>
          </div>
        </div>
        <div>
          <h4>Live chat</h4>
        </div>
      </main>
      <div className="text-cyan-300 flex justify-center items-center mt-10 gap-4">
        <p className="font-poppins uppercase tracking-widest">
          copy right
          <span>&#169;</span>
          <span>{year}</span>
        </p>
        <p className="font-poppins text-white ">The Black Army</p>
      </div>
    </section>
  );
};

export default Footer;
