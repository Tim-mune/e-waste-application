import { useGlobalContext } from "../context/appcontext";
import Button from "./Button";
import FormRow from "./FormRow";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const ProfileDashboard = () => {
  const initialState = {
    name: "",
    location: "",
    password: "",
    email: "",
  };
  const [state, setState] = useState(initialState);
  const { user, totalWastes } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: state.email,
      location: state.location,
      password: state.password,
      email: state.email,
    };
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <section className="p-4">
      <ToastContainer />
      <div className="lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 gap-2 xs:flex xs:flex-1 xs:flex-col  md:grid md:grid-cols-4 sm:grid sm:grid-cols-4">
        <div className="border rounded-md col-span-2 row-span-2 p-2">
          <h4 className="text-center font-semibold shadow-lg mt">
            Account info
          </h4>
          <h5 className="text-gray-300 mt-2">
            Name:{" "}
            <span className="float-right text-orange-300">{user.name}</span>
          </h5>
          <h5 className="text-gray-300 mt-2">
            Email:{" "}
            <span className="float-right text-orange-300">{user.email}</span>
          </h5>
          <h5 className="text-gray-300 mt-2">
            Location:{" "}
            <span className="float-right text-orange-300">{user.location}</span>
          </h5>
          <h5 className="text-gray-300 mt-2">
            joined:{" "}
            <span className="float-right text-orange-300">
              {user.createdAt}
            </span>
          </h5>
        </div>
        <div className="border rounded-md flex justify-around ">
          <div className="">
            <h4 className="text-fuchsia-400">Total</h4>
          </div>
          <div>
            <p className="">
              <span className="text-5xl text-sky-500">{totalWastes}</span>
            </p>
          </div>
        </div>
        <div className="border rounded-md flex justify-around ">
          <div className="">
            <h4 className="text-fuchsia-400">Disposed</h4>
          </div>
          <div>
            <p className="">
              <span className="text-5xl text-sky-500">40</span>
            </p>
          </div>
        </div>
        <div className="border rounded-md flex justify-around ">
          <div className="">
            <h4 className="text-fuchsia-400">Recycled</h4>
          </div>
          <div>
            <p className="">
              <span className="text-5xl text-sky-500">20</span>
            </p>
          </div>
        </div>
        <div className="border rounded-md flex justify-around ">
          <div className="">
            <h4 className="text-fuchsia-400">Progress</h4>
          </div>
          <div>
            <p className="">
              <span className="text-5xl text-sky-500 ">60%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-4 justify-center mt-10">
        <div className="border rounded-md">
          <h5 className="text-center tracking-widest mb-4">
            update your account details
          </h5>
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-2 gap-2 justify-center "
          >
            <FormRow
              type="text"
              name="name"
              value={state.name}
              handleChange={handleChange}
              labelText="Your name"
            />
            <FormRow
              type="email"
              name="email"
              value={state.email}
              handleChange={handleChange}
              labelText="Your email"
            />
            <FormRow
              type="text"
              name="password"
              value={state.password}
              handleChange={handleChange}
              labelText="Your password"
            />
            <FormRow
              type="text"
              name="location"
              value={state.location}
              handleChange={handleChange}
              labelText="Your Location"
            />
            <Button text="Submit" />
          </form>
        </div>
        <div className="border rounded-md">
          <div className="">
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col p-4"
            >
              <label htmlFor="text-area" className="text-white">
                Feedback
              </label>
              <textarea
                className="p-2 rounded-md resize "
                name=""
                id="text-area"
                cols="30"
                rows="10"
                placeholder="leave feedback"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <Link
            to="dashboard/stats"
            className="bg-slate-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4 text-center "
          >
            stats
          </Link>
          <Link className="bg-slate-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4 text-center">
            Home
          </Link>
          <Link className="bg-slate-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4 text-center ">
            Wastes
          </Link>
          <Link className="bg-slate-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4 text-center ">
            collect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfileDashboard;
