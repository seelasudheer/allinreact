import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebarStyle">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="products">Products</Link>
      <Link to="orders">Orders</Link>
      <Link to="refs">Refs</Link>
      <Link to="reducer">UseReducer</Link>
      <Link to="contextApi">Context API</Link>
    </div>
  );
};

export default Sidebar;
