import React from "react";

const ChartCard = ({ title, menu, children }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-xl font-bold">{title}</h3>
       
        {menu && <div>{menu}</div>}
      </div>
      {children}
    </div>
  );
};

export default ChartCard;
