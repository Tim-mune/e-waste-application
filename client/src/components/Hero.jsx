import { landing, first } from "../assets";
("react-lazy-load-image-component");
import FeaturesHero from "../helpers/hero-features";
import Benefits from "../helpers/benefits";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 p-2 mt-4 justify-center items-center md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 ss:flex ss:flex-col gap-6  ">
      <div className="flex items-center justify-center ">
        <img src={landing} alt="trash" className="object-contain " />
      </div>
      <div className="flex flex-col xs:mt-10 ">
        <h2 className="">Who are we?</h2>
        <p className="tracking-widest">
          Smart Waste is a technology-driven organization that specializes in
          the responsible and ethical management of electronic waste. Our team
          of computer scientists and engineers is passionate about promoting
          sustainability and reducing the environmental impact of electronic
          waste. We believe that every electronic device has the potential to be
          refurbished and resold, and we use cutting-edge technology and
          techniques to achieve this goal. At Smart Waste, we're committed to
          providing our clients with reliable and affordable solutions for
          electronic waste management
        </p>
        <div className="flex justify-between mt-8">
          <Link
            to="/register"
            className="bg-slate-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="bg-slate-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4 "
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-center">features</h2>
        <ul className="grid grid-cols-2 gap-4 grid-flow-row m-2">
          {FeaturesHero.map((item, index) => {
            return (
              <li
                className=" bg-white rounded-xl p-4 m-2 shadow-gray-600 shadow-xl"
                key={index}
              >
                {item.feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-4">
        <h2 className="text-center">Goals</h2>
        <ul className="grid grid-cols-2 gap-4 grid-flow-row m-2">
          {Benefits.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded-xl p-4 m-2 shadow-gray-700 shadow-xl"
            >
              {item.benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;

// gpt code
