import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import TopStats from "../Components/Dashboard/TopStats";
import RevenueChart from "../Components/Dashboard/RevenueChart";
import CustomersChart from "../Components/Dashboard/CustomersChart";
import DashboardCharts from "../Components/Dashboard/DashboardCharts";
import CustomerSection from "../Components/Dashboard/CustomerSection";
import Menu from "../Components/Dashboard/Menu";

const DashboardPage = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      {/* <Sidebar /> */}
      <div className="flex-1  ">
       {/*  <Header /> */}
        <div className="p-4 space-y-6">
          {/* Responsive Stats */}
          <TopStats />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Revenue Chart */}
            <RevenueChart />
            <CustomersChart />
          </div>
          <CustomerSection/>
          <Menu/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
