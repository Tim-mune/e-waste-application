import { Link } from "react-router-dom";
import reviewers from "../helpers/reviewers";
const Action = () => {
  return (
    <div className="flex flex-col pt-2">
      <h4 className="mt-2 text-white tracking-widest text-center font-semibold">
        Our partners and organizations
      </h4>
      <p className="mt-2 text-white  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        alias error ad. Suscipit, odio ducimus, modi eveniet non pariatur, in
        exercitationem itaque commodi beatae nostrum labore soluta libero
        provident voluptatem.
      </p>
      <Link
        to="/register"
        className="bg-slate-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4 xl:w-1/6 lg:w-1/6"
      >
        Get Started
      </Link>
      <div>
        <h2 className="text-white text-center tracking-widest font-semibold">
          Our partners reviews
        </h2>
        <div className="lg:flex lg:flex-row gap-4 xs:flex flex-col sm:justify-center items-center sm:grid sm:grid-cols-2 md:flex md:flex-row">
          {reviewers.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[250px] h-auto mt-4 bg-slate-100 rounded-2xl shadow-lg p-4 flex flex-col items-center text-slate-800"
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
        className="bg-slate-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4 xl:w-1/6 lg:w-1/6"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Action;
