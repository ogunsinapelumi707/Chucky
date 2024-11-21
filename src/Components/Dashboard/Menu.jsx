import React, { useState } from "react";
import { trackEvent } from "../../utils/analytics";

import { menuData } from "../../data/dummyData";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Category");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    trackEvent("Category", "Select", category); // Track category selection
  };

 
  const categories = ["All Category", ...new Set(menuData.map((item) => item.category))];

  // Filter items based on selected category
  const filteredMenu =
    selectedCategory === "All Category"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {/* Heading and Categories */}
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Menu</h2>
          <div className="flex gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`text-sm px-3 py-1 rounded-lg relative ${
                  selectedCategory === category
                    ? "text-[#6C5DD3] font-semibold"
                    : "text-gray-600"
                } transition`}
              >
                {category}
                {/* Active underline */}
                {selectedCategory === category && (
                  <span className="absolute bottom-[-15px] left-0 w-full h-[2px] bg-[#6C5DD3]" />
                )}
              </button>
            ))}
          </div>
        </div>
        <hr className="my-3 border-gray-300" />
      </div>

      {/* Menu Items Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First row: two wide images */}
        {filteredMenu.slice(0, 2).map((item, index) => (
          <div
            key={item.id}
            className={`relative rounded-lg overflow-hidden ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bg-[#bebdbd] opacity-90 border border-white bottom-4 p-4 rounded-md left-2 right-2 text-[#1E293B]">
                   <div className=" flex justify-between">
                    <h5 className="font-bold">{item.name}</h5>
                    <p className="text-sm">${item.price.toFixed(2)}</p>
                   </div>
                    <p className="text-xs text-[#64748B]">{item.served} Served</p>
                </div>
          </div>
        ))}

       
      </div>
       {/* Remaining items */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
            {filteredMenu.slice(2).map((item) => (
                <div key={item.id} className="relative rounded-lg overflow-hidden">
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bg-[#bebdbd] opacity-90 border border-white bottom-4 p-4 rounded-md left-2 right-2 text-[#1E293B]">
                    <div className="flex justify-between">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm">${item.price.toFixed(2)}</p>
                    </div>
                    <p className="text-xs text-[#64748B]">{item.served} Served</p>
                </div>
                </div>
            ))}
        </div>

    </div>
  );
};

export default Menu;
