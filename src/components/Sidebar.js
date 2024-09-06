import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import "boxicons/css/boxicons.min.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <button
        className="text-white text-4xl z-50 fixed top-3 left-5 md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? (
          "X"
        ) : (
          <Bars3Icon className="h-10 w-10 text-orange-500" />
        )}
      </button>
      <div className="md:w-1/4 lg:w-1/5">
        <div
          className={`text-white flex flex-col items-start fixed bg-gradient-to-r from-red-600 to-yellow-500 top-0 left-0 h-full w-full md:w-1/4 lg:w-1/5 p-10 pt-14 text-left ease-in-out duration-500 ${
            showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <h1 className="text-2xl font-bold text-white mb-6">
            Fitness Tracking
          </h1>
          <ul className="w-full">
            <li className="mb-7">
              <div className="relative">
                <button className="absolute left-0 inset-y-0 pl-2">
                  <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
                </button>
                <input
                  className="w-full px-4 py-2 pl-9 rounded shadow"
                  placeholder="Search..."
                />
              </div>
            </li>
            <li className="sidebar-item">
              <Link to="/" className="text-white font-bold rounded flex">
                <HomeIcon className="sidebar-icon" /> Home
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/workout" className="text-white font-bold rounded flex">
                <i className="bx bx-dumbbell sidebar-icon bx-sm"></i>
                Workout Form
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                to="/progress"
                className=" text-white font-bold rounded flex"
              >
                <i className="bx bx-line-chart sidebar-icon bx-sm"></i>
                Progress Dashboard
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/goals" className=" text-white font-bold rounded flex">
                <i className="bx bx-trophy sidebar-icon bx-sm"></i>
                Your Goals
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
