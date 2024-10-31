import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const { userName } = useSelector((state: any) => state.auth) || {};
  const locationData = useLocation();
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/dashboard", { state: { user: "123" } });
  };

  return (
    <div>
      <h6>Profile - {id}</h6>
      <div style={{ float: "right" }}>
        <button className="btn btn-outline-primary brn-sm" onClick={navigateToDashboard}>
          Go back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Profile;
