import { FormRow, Button } from "../components";
import { useState } from "react";
import { Link } from "react-router-dom";
const Auth = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
  };

  // functions to send data to the server comming up

  const [values, setValues] = useState(initialState);
  const OnSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      console.log("provide all values please");
    }
    console.log(values);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-poppins mb-8 capitalize text-cyan-400">
        {values.isMember ? "Register for an account" : " Login to your account"}
      </h2>
      <form className="flex flex-col items-center" onSubmit={OnSubmit}>
        {values.isMember && (
          <label htmlFor="name" className="text-xl mb-2 text-cyan-300">
            Name:
          </label>
        )}
        {values.isMember && (
          <input
            type="text"
            id="name"
            name="name"
            className="p-2 mb-4 rounded-lg w-full"
            onChange={onChange}
          />
        )}

        <label htmlFor="email" className="text-xl mb-2 text-cyan-300">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="p-2 mb-4 rounded-lg w-full"
          onChange={onChange}
        />

        <label htmlFor="password" className="text-xl mb-2 text-cyan-300">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          minLength="8"
          className="p-2 mb-4 rounded-lg w-full"
          onChange={onChange}
        />
        <p className="text-cyan-400 font-poppins">
          {values.isMember ? "Already a member?" : " Not a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="p-2 my-4 mx-4 hover:text-lg hover:opacity-90  rounded-lg tracking-wider text-white underline"
          >
            {values.isMember ? "Login" : "Register"}
          </button>
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 hover:translate-y-1 tracking-widest font-poppins"
        >
          {values.isMember ? "Register" : "Login"}
        </button>
      </form>
      <Link
        to="/"
        className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 hover:translate-y-1 tracking-widest font-poppins my-10 "
      >
        Back Home?
      </Link>
    </div>
  );
};

export default Auth;
