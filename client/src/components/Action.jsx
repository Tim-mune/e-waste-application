import { Link } from "react-router-dom";
const Action = () => {
  return (
    <div className="flex flex-col pt-2">
      <h4 className="mt-2 text-white tracking-widest text-center">
        Our partners and organizations
      </h4>
      <p className="mt-2 leading-6 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        alias error ad. Suscipit, odio ducimus, modi eveniet non pariatur, in
        exercitationem itaque commodi beatae nostrum labore soluta libero
        provident voluptatem.
      </p>
      <div>
        <h2 className="text-white tracking-widest">Our partners reviews</h2>
        <div className="lg:flex lg:flex-row gap-4 xs:flex flex-col sm:justify-center items-center sm:grid sm:grid-cols-2 md:flex md:flex-row">
          <div className="w-[250px] h-auto mt-4 bg-slate-400 rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <img src="" alt="image goes here" className=" top-0" />
            <h4 className="mt-4 text-white tracking-wider">Kabarak Ict</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              quibusdam deserunt atque omnis modi velit ab maxime ullam quod
              accusantium porro dolore in voluptatibus placeat nisi, blanditiis
              ut. Illum, animi.
            </p>
          </div>
          <div className="w-[250px] h-auto mt-4 bg-slate-400 rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <img src="" alt="image goes here" className=" top-0" />
            <h4 className="mt-4 text-white tracking-wider">Kabarak Ict</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              quibusdam deserunt atque omnis modi velit ab maxime ullam quod
              accusantium porro dolore in voluptatibus placeat nisi, blanditiis
              ut. Illum, animi.
            </p>
          </div>
          <div className="w-[250px] h-auto mt-4 bg-slate-400 rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <img src="" alt="image goes here" className=" top-0" />
            <h4 className="mt-4 text-white tracking-wider">Kabarak Ict</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              quibusdam deserunt atque omnis modi velit ab maxime ullam quod
              accusantium porro dolore in voluptatibus placeat nisi, blanditiis
              ut. Illum, animi.
            </p>
          </div>
          <div className="w-[250px] h-auto mt-4 bg-slate-400 rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <img src="" alt="image goes here" className=" top-0" />
            <h4 className="mt-4 text-white tracking-wider">Kabarak Ict</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              quibusdam deserunt atque omnis modi velit ab maxime ullam quod
              accusantium porro dolore in voluptatibus placeat nisi, blanditiis
              ut. Illum, animi.
            </p>
          </div>
        </div>
      </div>
      <Link
        to="/register"
        className="bg-blue-600 text-white p-2 m-2 rounded-lg hover:-translate-y-1 hover:opacity-70 tracking-wider w-1/4 mx-0 mt-2 text-center"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Action;
