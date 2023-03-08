import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect } from "react";

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
      <Navbar />
      <div className="flex gap-2">
        <div className="w-1/6 bg-green-400 min-h-screen rounded-lg">
          sidebar where we will have links for the pages{" "}
        </div>
        <div className="w-1/6 bg-green-400 min-h-screen rounded-lg">
          sidebar where we will have links for the pages{" "}
        </div>
        <div className="w-4/6 bg-red-400 rounded-lg">
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
