import { Link } from "react-router-dom";
const Action = () => {
  return (
    <div className="flex flex-col pt-2">
      <h4 className="mt-2">actions</h4>
      <p className="mt-2 leading-6">
        ready to keep track and manage your waste ??
      </p>
      <Link
        to="/register"
        className="bg-blue-600 text-dimWhite p-2 m-2 rounded-lg hover:-translate-y-1 hover:opacity-70 tracking-wider w-1/4 mx-0 mt-2"
      >
        SignUp/Login
      </Link>
    </div>
  );
};

export default Action;
