import { Link } from "react-router-dom";
const Action = () => {
  return (
    <div className="flex flex-col pt-2">
      <h4 className="mt-2">actions</h4>
      <p className="mt-2 leading-6 text-white">
        ready to keep track and manage your waste ??
      </p>
      <p>partrners</p>
      <div>
        <h1>name</h1>
        <p>testimony</p>
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
