import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const authState = useSelector((state: any) => state.auth);
  const { isValidUser } = authState;

  return isValidUser ? (
    <>
      <Navbar />
      <Outlet />{" "}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
