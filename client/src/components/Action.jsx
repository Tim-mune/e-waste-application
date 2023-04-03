import { Link } from "react-router-dom";
import reviewers from "../helpers/reviewers";
const Action = () => {
  return (
    <div className="flex flex-col pt-2 container">
      <h4 className="mt-4 text-white tracking-widest text-center font-semibold">
        Our partners and organizations
      </h4>
      <p className="mt-6 text-white min-w-fit text-center">
        At Smart Waste, we're proud to work with a variety of partners who share
        our mission to promote sustainability and reduce electronic waste. We
        believe that collaboration is key to achieving our goals, and we're
        grateful for the support and expertise of our partners. In this section,
        we'd like to introduce you to some of the organizations and businesses
        we work with and share how their contributions help us make a positive
        impact on the environment."
      </p>
      <Link
        to="/register"
        className="bg-slate-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4 xl:w-1/6 lg:w-1/6"
      >
        Get Started
      </Link>
      <div>
        <h2 className="text-white text-center tracking-widest font-semibold mt-6">
          Our partners reviews
        </h2>
        <div className="lg:flex lg:flex-row gap-4 ss:flex ss:flex-col sm:justify-center items-center sm:grid sm:grid-cols-2 md:flex md:flex-row ss:">
          {reviewers.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[250px] h-auto mt-4 bg-slate-100 rounded-2xl  p-4 flex flex-col items-center text-slate-800 shadow-xl shadow-gray-900"
              >
                <img
                  src={item.image}
                  alt="image goes here"
                  className=" top-0"
                />
                <h4 className="mt-4 text-slate-800 font-semibold tracking-wider">
                  {item.name}
                </h4>
                <p className="text-slate-800">{item.review}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Link
        to="/register"
        className="bg-slate-800 text-white py-1 px-2 mt-10 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4 xl:w-1/6 lg:w-1/6"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Action;
