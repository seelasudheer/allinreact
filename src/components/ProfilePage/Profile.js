import React, { useState, useContext } from "react";
import { UserContext } from "../../context/usercontext/UserContext";

export default function Profile() {
  const { userName = "" } = useContext(UserContext);
  console.log(userName, "userName");
  return (
    <div>
      <h3>Logged in username is {userName && userName} </h3>
    </div>
  );
}
