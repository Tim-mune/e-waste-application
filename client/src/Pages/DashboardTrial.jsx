import { Outlet, Link } from "react-router-dom";
import SmallSideBar from "../components/SmallSideBar";
const DashboardTrial = () => {
  return (
    <section className="flex h-screen">
      <div className=" lg:block md:block w-2/12 bg-slate-600 sm:hidden xs:hidden">
        <SmallSideBar />
      </div>
      <div className="w-10/12 bg-gray-800 xs:w-full sm:w-full">
        <header>
          <Outlet />
        </header>
      </div>
    </section>
  );
};

export default DashboardTrial;
