import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { FaEllipsisH } from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const DashboardCharts = () => {
  const [revenueMenuOpen, setRevenueMenuOpen] = useState(false);
  const [customersMenuOpen, setCustomersMenuOpen] = useState(false);

  // Dummy data for Revenue (Bar Chart)
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Pending (10%)",
        data: [30, 20, 50, 60, 40, 70, 80, 30, 50, 60, 40, 20],
        backgroundColor: "#8B5CF6",
      },
      {
        label: "Income",
        data: [50, 40, 70, 90, 60, 100, 110, 40, 70, 80, 60, 40],
        backgroundColor: "#22C55E",
      },
      {
        label: "Expense",
        data: [20, 10, 30, 40, 20, 50, 60, 20, 30, 40, 20, 10],
        backgroundColor: "#F87171",
      },
    ],
  };

  // Dummy data for Customers (Doughnut Chart)
  const customersData = {
    labels: ["Current Customers", "New Customers"],
    datasets: [
      {
        data: [82.3, 17.7],
        backgroundColor: ["#4F46E5", "#22C55E"],
        hoverBackgroundColor: ["#4338CA", "#16A34A"],
      },
    ],
  };

  return (
    <div className="flex grid-cols-1 lg:grid-cols-1 gap-6">
      {/* Revenue Card */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Revenue</h2>
          <div className="relative">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setRevenueMenuOpen(!revenueMenuOpen)}
            >
              <FaEllipsisH />
            </button>
            {revenueMenuOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Export</li>
                <li className="px-4 py-2 text-red-500 hover:bg-red-100 cursor-pointer">Remove</li>
              </ul>
            )}
          </div>
        </div>
        <h3 className="text-3xl font-bold mb-4">$112,340</h3>
        <div className="h-[250px]">
          <Bar data={revenueData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Customers Card */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Customers</h2>
          <div className="relative">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setCustomersMenuOpen(!customersMenuOpen)}
            >
              <FaEllipsisH />
            </button>
            {customersMenuOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Export</li>
                <li className="px-4 py-2 text-red-500 hover:bg-red-100 cursor-pointer">Remove</li>
              </ul>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-4">Customers that buy our products</p>
        <div className="h-[250px]">
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
      </div>
    </div>
  );
};

export default DashboardCharts;
