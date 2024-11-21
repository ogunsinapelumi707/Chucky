import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { FaEllipsisH, FaEye, FaFileExport, FaTrash  } from "react-icons/fa";
import ChartCard from "./ChartCard";

import {revenueData} from "../../data/dummyData"

const RevenueChart = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 

  const menu = (
    <div className="relative">
      <button
        className="text-gray-500 hover:text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaEllipsisH />
      </button>
      {menuOpen && (
         <ul className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg text-sm">
         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
           <FaEye className="text-gray-500" />
           <span>View</span>
         </li>
         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
           <FaFileExport className="text-gray-500 transform rotate-[-90deg]" />
           <span>Export</span>
         </li>
         <li className="px-4 py-2 text-red-500 hover:bg-red-100 cursor-pointer flex items-center space-x-2">
           <FaTrash />
           <span>Remove</span>
         </li>
       </ul>
      )}
    </div>
  );

  return (
    <ChartCard title="Revenue" menu={menu}>
      <hr />
      <h3 className="text-3xl font-bold mt-4">$112,340</h3>
      <div className="h-[250px] mt-4">
        <Bar data={revenueData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </ChartCard>
  );
};

export default RevenueChart;
