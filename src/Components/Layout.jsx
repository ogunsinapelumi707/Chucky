import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 md:ml-[16rem]  flex flex-col">
        {/* Header */}
        <Header />
        {/* Page Content */}
        <main className="p-1 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
