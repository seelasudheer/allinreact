import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const state = useSelector((state) => state);
  const params = useParams();
  const locationData = useLocation();
  console.log(locationData, "locationData");

  return (
    <div className="row p-0 m-0">
      <div className="col-2 p-0">
        <Sidebar />
      </div>
      <div className="col-10 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
