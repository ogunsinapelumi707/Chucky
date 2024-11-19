import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { FaEllipsisH, FaEye, FaFileExport, FaTrash } from "react-icons/fa";
import ChartCard from "./ChartCard";

import { customersData } from "../../data/dummyData";

const CustomersChart = () => {
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
    <ChartCard title="Customers" menu={menu}>
      <p className="text-sm text-gray-500 mb-4">Customers that buy our products</p>
      <div className="h-[200px]">
        <Doughnut
          data={customersData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            cutout: "75%",
          }}
        />
      </div>
      <div className="mt-6 flex justify-around">
        <div className="text-center">
          <span className="text-lg text-green-500 font-semibold">+18%</span>
          <p className="text-sm font-medium">Daily customers</p>
        </div>
        <div className="text-center">
          <span className="text-lg text-green-500 font-semibold">+14%</span>
          <p className="text-sm font-medium">Weekly new customers</p>
        </div>
      </div>
    </ChartCard>
  );
};

export default CustomersChart;
