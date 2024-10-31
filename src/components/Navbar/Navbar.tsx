import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/slices/authSlice";

const Navbar = () => {
  const userId = 111;
  const { userName = "" } = useSelector((state: any) => state.auth) || {};
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logOutUser());
  };
  return (
    <div className="navbar">
      <div className="leftNav">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/shopping">Shopping</Link>
      </div>
      <div className="rightNav">
        <Link to="/usermanagement">User Management</Link>
        <Link to={`/profile/${userId}`} state={{ fname: "sudheer" }}>
          {userName} <FontAwesomeIcon icon={faUser} />
        </Link>
        <a>
          <FontAwesomeIcon icon={faSignOut} onClick={signOut} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
