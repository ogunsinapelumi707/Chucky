import { FaUtensils, FaChartLine, FaUsers, FaShoppingBag } from "react-icons/fa";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import dish5 from "../assets/dish5.png";
import dish6 from "../assets/dish6.png";

// Import images from the assets folder
import profile3 from "../assets/profile3.webp";
import profile6 from "../assets/profile6.jpg";
import profile5 from "../assets/profile5.jpeg";
import profile4 from "../assets/profile4.jpg";


export   const revenueData = {
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

  export const stats = [
    { title: "Total Menu", value: 345, icon: FaUtensils },
    { title: "Total Revenue", value: "$37,193.00", icon: FaChartLine },
    { title: "Total Customers", value: 1349, icon: FaUsers },
    { title: "Total Orders", value: 3500, icon: FaShoppingBag },
  ];

  export   const menuData = [
    { id: 1, name: "Surf & Turf Gift Basket", price: 89.24, category: "Breakfast", img: dish1, served: 456 },
    { id: 2, name: "Shaking Beef Tri-Tip", price: 69.46, category: "Lunch", img: dish2, served: 456 },
    { id: 3, name: "BBQ Rib Dinner", price: 69.21, category: "Dinner", img: dish3, served: 456 },
    { id: 4, name: "Chicken & Ribs Combo", price: 98.49, category: "Lunch", img: dish4, served: 456 },
    { id: 5, name: "Fried Chicken Dinner", price: 83.56, category: "Dinner", img: dish5, served: 456 },
    { id: 6, name: "Dark & Stormy", price: 90.58, category: "Dinner", img: dish6, served: 456 },
  ];

  export   const customersData = {
    labels: ["Current Customers", "New Customers"],
    datasets: [
      {
        data: [82.3, 17.7],
        backgroundColor: ["#9EC600", "#4F46E5"],
        hoverBackgroundColor: ["#4338CA", "#16A34A"],
      },
    ],
  };

  export const customers = [
    { name: "San Francisco", total: 678, lat: 37.7749, lng: -122.4194 }, // San Francisco
    { name: "Los Angeles", total: 235, lat: 34.0522, lng: -118.2437 }, // Los Angeles
    { name: "Fresno", total: 167, lat: 36.7783, lng: -119.4179 }, // Fresno
    { name: "San Diego", total: 89, lat: 32.7157, lng: -117.1611 }, // San Diego
    { name: "New York", total: 98, lat: 40.7128, lng: -74.006 }, // New York
    { name: "Chicago", total: 45, lat: 41.8781, lng: -87.6298 }, // Chicago
    { name: "Seattle", total: 76, lat: 47.6062, lng: -122.3321 }, // Seattle
    { name: "Houston", total: 56, lat: 29.7604, lng: -95.3698 }, // Houston
    { name: "Miami", total: 256, lat: 25.7617, lng: -80.1918 }, // Miami
    { name: "Phoenix", total: 989, lat: 33.4484, lng: -112.074 }, // Phoenix
  ];

  export const customersList = [
    {
      name: "George Litz",
      email: "georgelitz@gmail.com",
      img: profile3,
    },
    {
      name: "John Miller",
      email: "jmiller@gmail.com",
      img: profile5,
    },
    {
      name: "Jane Johnson",
      email: "jj@gmail.com",
      img: profile4,
    },
    {
      name: "Mezei Ágnes",
      email: "fefekartika@gmail.com",
      img: profile6,
    },
    {
      name: "Katona Beatrix",
      email: "edobram@gmail.com",
      img: profile3,
    },
    {
      name: "Halász Emese",
      email: "jiloputri@yahoo.com",
      img: profile4,
    },
    {
      name: "Emma Brown",
      email: "emma@gmail.com",
      img: profile6,
    },
    
  ];