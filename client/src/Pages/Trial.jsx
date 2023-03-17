import React from "react";
import { Link } from "react-router-dom";
import SmallSideBar from "../components/SmallSideBar";
const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-gray-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link
        to="/"
        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 hover:text-white"
      >
        <span>Dashboard</span>
      </Link>
      <Link
        to="/reports"
        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 hover:text-white"
      >
        <span>Reports</span>
      </Link>
    </div>
  );
};

const Trial = () => {
  return (
    <div className="flex h-screen">
      <SmallSideBar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4">
          <h1>main content goes here</h1>
        </main>
      </div>
    </div>
  );
};

export default Trial;
