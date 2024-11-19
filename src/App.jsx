import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { initGA, trackPageView } from "./utils/analytics";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/DashboardPage";
import Orders from "./Pages/Orders";
import PendingOrders from "./Pages/PendingOrders";
import CompletedOrders from "./Pages/CompletedOrders";
import Analytics from "./Pages/Analytics";
import Customers from "./Pages/Customers";
import Menu from "./Pages/Menu";

const App = () => {

  useEffect(() =>{
    initGA()
  }, [])
  return (
    <Router>
      <GA4RouteTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/pending" element={<PendingOrders />} />
          <Route path="/orders/completed" element={<CompletedOrders />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Layout>
    </Router>
  );
};
// Route Tracker for tracking page views
const GA4RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname); 
  }, [location]);

  return null;
};

export default App;
