import React from "react";
import { customersList } from "../../data/dummyData";
import { useSelector } from "react-redux";



const CustomerList = () => {
  const {customerList} = useSelector((state) => state.customerList)
  return (
    <div>
      {/* Heading */}
      <h3 className="text-lg font-bold mb-2">Customers List</h3>
      <hr className="border-gray-200 mb-4" />

      {/* Customer List */}
      <ul className="space-y-1">
        {customerList.map((customer, index) => (
          <li
            key={index}
            className="flex items-center gap-4 bg-gray-50 rounded-lg hover:cursor-pointer hover:shadow-md transition"
          >
            {/* Customer Image */}
            <img
              src={customer.img}
              alt={customer.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            {/* Customer Info */}
            <div>
              <p className="font-medium">{customer.name}</p>
              <p className="text-sm text-gray-500">{customer.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
