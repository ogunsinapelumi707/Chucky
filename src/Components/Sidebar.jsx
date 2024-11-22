import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaShoppingBag,
  FaChartBar,
  FaUsers,
  FaUtensils,
  FaBars,
  FaAngleRight,
} from "react-icons/fa";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const handleCloseSidebar = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <button
        className="p-3 text-[#6C5DD3] bg-white fixed top-4 left-4 z-[100] shadow md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed h-screen flex flex-col justify-between bg-white w-64 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 z-50`}
      >
        {/* Logo */}
        <div className="py-4 text-2xl gap-3 flex align-middle justify-center font-bold">
          <div className="bg-[#6C5DD3] p-2 rounded-tl-lg rounded-br-lg">
            <img alt="Logo" src={logo} />
          </div>
          <div className="flex flex-col">
            <span>Chucky</span>
            <span className=" text-xs text-[#2D2D2D]">Admin Dashboard</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mx-4 mt-4 text-purple-100 font-bold">
          <ul>
            {/* Dashboard */}
            <li>
              <NavLink
                to="/"
                onClick={handleCloseSidebar}
                className={({ isActive }) =>
                  `flex items-center py-3 px-6 rounded-md cursor-pointer ${
                    isActive
                      ? "bg-[#6C5DD3] text-white"
                      : "hover:bg-[#6C5DD3] text-[#8f95b2]"
                  }`
                }
              >
                <FaHome className="mr-4" /> Dashboard
              </NavLink>
            </li>

            {/* Orders with Submenu */}
            <li
              className="relative"
              onMouseEnter={() => setSubmenuOpen(true)}
              onMouseLeave={() => setSubmenuOpen(false)}
            >
              <div className="flex items-center justify-between py-3 px-6 hover:bg-[#6C5DD3] text-[#8f95b2] rounded-md cursor-pointer">
                <div className="flex items-center">
                  <FaShoppingBag className="mr-4" />
                  Orders
                </div>
                <FaAngleRight
                  className={`text-gray-400 transition-transform ${
                    submenuOpen ? "rotate-90" : ""
                  }`}
                />
              </div>

              {/* Submenu */}
              {submenuOpen && (
                <ul className="absolute left-64 top-0 bg-white shadow-lg rounded-md w-48 text-gray-700 z-50">
                  <li>
                    <NavLink
                      onClick={handleCloseSidebar}
                      to="/orders"
                      className={({ isActive }) =>
                        `block py-3 px-4 hover:bg-gray-100 ${
                          isActive ? "text-[#6C5DD3] font-bold" : ""
                        }`
                      }
                    >
                      All Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/orders/pending"
                      onClick={handleCloseSidebar}
                      className={({ isActive }) =>
                        `block py-3 px-4 hover:bg-gray-100 ${
                          isActive ? "text-[#6C5DD3] font-bold" : ""
                        }`
                      }
                    >
                      Pending Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/orders/completed"
                      onClick={handleCloseSidebar}
                      className={({ isActive }) =>
                        `block py-3 px-4 hover:bg-gray-100 ${
                          isActive ? "text-[#6C5DD3] font-bold" : ""
                        }`
                      }
                    >
                      Completed Orders
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Analytics */}
            <li>
              <NavLink
                to="/analytics"
                onClick={handleCloseSidebar}
                className={({ isActive }) =>
                  `flex items-center py-3 px-6 rounded-md cursor-pointer ${
                    isActive
                      ? "bg-[#6C5DD3] text-white"
                      : "hover:bg-[#6C5DD3] text-[#8f95b2]"
                  }`
                }
              >
                <HiOutlineChartSquareBar className="mr-4" /> Analytics
              </NavLink>
            </li>

            {/* Customers */}
            <li>
              <NavLink
                to="/customers"
                onClick={handleCloseSidebar}
                className={({ isActive }) =>
                  `flex items-center py-3 px-6 rounded-md cursor-pointer ${
                    isActive
                      ? "bg-[#6C5DD3] text-white"
                      : "hover:bg-[#6C5DD3] text-[#8f95b2]"
                  }`
                }
              >
                <FaUsers className="mr-4" /> Customers
              </NavLink>
            </li>

            {/* Menu */}
            <li>
              <NavLink
                to="/menu"
                onClick={handleCloseSidebar}
                className={({ isActive }) =>
                  `flex items-center py-3 px-6 rounded-md cursor-pointer ${
                    isActive
                      ? "bg-[#6C5DD3] text-white"
                      : "hover:bg-[#6C5DD3] text-[#8f95b2]"
                  }`
                }
              >
                <FaUtensils className="mr-4" /> Menu
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Upgrade Plan */}

        {plan &&<div className="p-4 bg-white rounded-lg shadow-md w-64 relative">
          {/* Close Icon */}
          <button onClick={() => setPlan(!plan)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
            ✖
          </button>

          {/* Circular Progress */}
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <svg className="w-14 h-14">
                {/* Background Circle */}
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="#e5e7eb"
                  strokeWidth="4"
                  fill="none"
                />
                {/* Progress Circle */}
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="#6C5DD3"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="150.72"
                  strokeDashoffset="21.1" /* Adjust offset for percentage */
                  strokeLinecap="round"
                />
              </svg>
              {/* Percentage Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#6C5DD3] font-bold text-lg">86%</span>
              </div>
            </div>
          </div>

          {/* Subscription Info */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Subscription Plan</h3>
            <p className="text-sm text-gray-600 mt-1">
              Your subscription plan will expire soon. Please upgrade!
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-purple-500 font-semibold hover:underline"
            >
              Upgrade
            </a>
          </div>
        </div>}
      </aside>
    </>
  );
};

export default Sidebar;
