import React from "react";
import LogIn from "../../components/LogInPage/LogIn";
import Profile from "../../components/ProfilePage/Profile";
import { UserContextProvider } from "../../context/usercontext/UserCProvider";

const ContextExample = () => {
  return (
    <UserContextProvider>
      <div>
        <LogIn />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

export default ContextExample;
