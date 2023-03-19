import { Link } from "react-router-dom";
import { Button } from "../components";
const Error = () => {
  return (
    <section className=" container  my-[100px] min-h-screen flex flex-col gap-10 ">
      <div className="text-white">
        <div className="flex justify-center flex-col  items-center">
          <h3>page not found</h3>
          <img src="" alt="error image svg" />
        </div>
      </div>
      <div>
        <Link
          to="/"
          className="bg-blue-500 text-white py-1 px-2 m-2 rounded-lg hover:bg-blue-600 tracking-widest font-poppins"
        >
          Navigate home
        </Link>
      </div>
    </section>
  );
};

export default Error;
