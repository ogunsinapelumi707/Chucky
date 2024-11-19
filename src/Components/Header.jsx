import React,{useState} from "react";
import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";

import profile4 from "../assets/profile4.jpg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex flex-wrap items-center justify-between bg-white shadow px-4 py-4">
      <div>
        <h1 className="text-lg font-bold">Hi, Taylor!</h1>
        <p className="text-sm text-gray-500">Let's check your store today</p>
      </div>
      <div className="flex items-center gap-4 space-x-4 mt-3 md:mt-0">
        <div className=" flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <FaSearch
              className="absolute top-2.5 left-3 text-gray-500"
             
            />
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full pl-10 py-2 w-64 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {/* Email Icon with Badge */}
          <div className="relative">
            <FaEnvelope className="text-gray-500 text-xl cursor-pointer" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </div>

          {/* Bell Icon with Badge */}
          <div className="relative">
            <FaBell className="text-gray-500 text-xl cursor-pointer" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative flex items-center">
          <img src={profile4} className="text-purple-700 h-8 w-8 rounded-full text-2xl cursor-pointer" />
          <span className=" font-bold text-sm">Tynishia Obey</span>
           {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-10 right-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</li>
          </ul>
        </div>
      )}
        </div>
        {/* Mobile Search */}
        {/* <div className="relative md:hidden">
          <FaSearch 
            className="text-gray-500 text-xl cursor-pointer" 
            />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
