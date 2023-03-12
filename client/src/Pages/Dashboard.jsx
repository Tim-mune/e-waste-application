import { useState } from "react";
import { Button } from "../components";
import Navbar from "../components/Navbar";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import dashboardLinks from "../helpers/dashBoard";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const test = async () => {
    const res = await axios.get("/");
    const data = await res.data;
    console.log(data);
  };
  useEffect(() => {
    test();
  }, []);
  const [sideBar, hideSideBar] = useState(false);
  return (
    <section>
      <div className="flex gap-2">
        <div className="w-1/6 bg-cyan-600 min-h-screen rounded-lg p-2 flex flex-col justify-between">
          <div className=" flex flex-col  items-center p-2">
            <span>
              <BiUserCircle className="bg-slate-400 w-20 h-20 rounded-full object-contain" />
            </span>
            <p className="p-2 mt-2 text-dimWhite tracking-wider font-poppins">
              {" "}
              welcome <span className="text-gray-100 tracking-widest">Tim</span>
            </p>
            <div className="flex flex-col gap-3 mt-8">
              {dashboardLinks.map((item, index) => {
                return (
                  <Link
                    className="p-2 capitalize tracking-widest hover:translate-x-3 duration-500 text-gray-200 font-poppins"
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <Link className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 tracking-widest text-base font-poppins -mb-4">
              Logout
            </Link>
            <h2>settings</h2>
          </div>
        </div>
        <div className="w-5/6 bg-cyan-700 min-h-screen rounded-lg p-4 ">
          <h2>main content</h2>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
