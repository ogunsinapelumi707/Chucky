import React from "react";

import { FaList, FaChartLine, FaUsers, FaShoppingBag } from "react-icons/fa";
import fill from "../../assets/fill.png"
import { stats } from "../../data/dummyData";
import { useSelector } from "react-redux";

// this page show products stat
const TopStats = () => {
  const {stats} = useSelector((state) => state.stats)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-50 shadow rounded-lg p-4 flex flex-col gap-2 text-left border border-gray-100"
        > 
        {stat.icon && <div className=" p-3 bg-white w-12 h-12 rounded-full"><stat.icon className="text-dark-500 text-2xl mb-2" /></div>}
          <h3 className="text-[#64748B] text-sm">{stat.title}</h3>
          <p className="text-xl font-bold text-[#1e293b]">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default TopStats;
