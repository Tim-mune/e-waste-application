import { landing, first } from "../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FeaturesHero from "../helpers/hero-features";
import Benefits from "../helpers/benefits";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
const Hero = () => {
  return (
    <section className="lg:grid lg:grid-cols-2 p-2 mt-5 justify-center items-center md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 xs:flex xs:flex-col gap-4  ">
      <div className="">
        <img src={landing} alt="trash" />
      </div>
      <div className="flex flex-col xs:mt-10 ">
        <h2 className="">Who are we?</h2>
        <p className="tracking-widest">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          voluptatibus quas eos natus corporis vel unde rem. Ad ab itaque
          necessitatibus laboriosam quidem optio officiis accusantium corporis
          facilis sapiente, omnis consectetur atque nihil officia minima harum
          dolores quo neque esse? Fuga et beatae necessitatibus nihil sint optio
          provident commodi enim deleniti aperiam doloremque amet, error, nulla
          reiciendis quas architecto dolores!
        </p>
        <div className="flex justify-between mt-10">
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
      <div className="p-4">
        <h2 className="">features</h2>
        <ul className="grid grid-cols-2 gap-4 grid-flow-row m-2">
          {FeaturesHero.map((item, index) => {
            return (
              <li
                className=" bg-white rounded-md p-4 m-2 shadow-gray-600 shadow-lg"
                key={index}
              >
                {item.feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-4">
        <h2 className="">Goals</h2>
        <ul className="grid grid-cols-2 grid-flow-row gap-4">
          {Benefits.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded-md p-4 m-2 shadow-gray-700 shadow-lg"
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
