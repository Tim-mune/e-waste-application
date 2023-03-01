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
        <Button text="navigate home" />
      </div>
    </section>
  );
};

export default Error;
