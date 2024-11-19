import React from "react";
import CustomerMap from "./CustomerMap";
import CustomerList from "./CustomerList";

const CustomerSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-12">
      {/* Customer Map Section */}
      <div className="md:col-span-2 lg:col-span-8 bg-white rounded-lg shadow p-6">
        <CustomerMap />
      </div>

      {/* Customer List Section */}
      <div className="md:col-span-2 lg:col-span-4 bg-white rounded-lg shadow p-6">
        <CustomerList />
      </div>
    </div>
  );
};

export default CustomerSection;
