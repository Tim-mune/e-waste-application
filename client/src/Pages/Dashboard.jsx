import { useState } from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [sideBar, hideSideBar] = useState(false);
  return (
    <section>
      <Navbar />
      <div className="flex gap-2">
        <div className="w-1/6 bg-green-400 min-h-screen">
          sidebar where we will have links for the pages{" "}
        </div>
        <div className="w-4/6 bg-red-400">
          here we display information and the pages the navigation is for
          navigation only not part of pages in the side bar
        </div>
        <div className="w-1/6 bg-teal-300">
          some extra info not necesary thou
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
