import { Loading } from "../components";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/appcontext";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
  };
  const { registerUser, loginUser, isLoading, dispayText, user } =
    useGlobalContext();
  const text = dispayText;
  const navigate = useNavigate();
  // check if theres user
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [user, navigate]);

  // functions to send data to the server comming up

  const [values, setValues] = useState(initialState);
  const OnSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.warn("please provide all values");
      return;
    }
    const userRegister = { name, email, password };
    const userLogin = { email, password };

    if (values.isMember) {
      loginUser(userLogin);
      toast.success("success... redirecting");
    }
    if (!values.isMember) {
      registerUser(userRegister);
      toast.success("registration successful ...redirecting");
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl mb-5 text-gray-200">
        {values.isMember ? "Register for an account" : " Login to your account"}
      </h2>
      <p>{text}</p>
      <form className="flex flex-col items-center" onSubmit={OnSubmit}>
        <h5 className="mb-2">Smart waste inc</h5>
        {isLoading && <Loading />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {!values.isMember && (
          <label htmlFor="name" className="text-xl mb-2 text-cyan-300">
            <h5>Name</h5>
          </label>
        )}
        {!values.isMember && (
          <input
            type="text"
            id="name"
            name="name"
            className="p-2 mb-4 rounded-lg w-full"
            onChange={onChange}
          />
        )}

        <label htmlFor="email" className="text-xl mb-2 text-cyan-300">
          <h5 className="tracking-widest">Email</h5>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="p-2 mb-4 rounded-lg w-full"
          onChange={onChange}
        />

        <label htmlFor="password" className="text-xl mb-2">
          <h5 className="tracking-widest">Password</h5>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          minLength="7"
          className="p-2 mb-4 rounded-lg w-full"
          onChange={onChange}
        />
        <p className="text-gray-200 font-poppins">
          {values.isMember ? "Already a member?" : " Not a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="p-2 my-4 mx-4 hover:scale-90 duration-300 hover:opacity-90  rounded-lg tracking-wider text-gray-100 underline"
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-slate-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-slate-600 duration-300 hover:scale-90 tracking-widest font-poppins w-1/2 xl:w-1/6 "
        >
          {values.isMember ? "Login" : "Register"}
        </button>
      </form>
      <Link
        to="/"
        className="bg-red-800 text-white py-1 px-2 m-2 rounded-lg hover:bg-red-500 duration-300 hover:scale-90 tracking-widest font-poppins w-1/4 xl:w-1/6 lg:w-1/6 md:w-1/6 text-center"
      >
        Back Home?
      </Link>
    </div>
  );
};

export default Auth;
