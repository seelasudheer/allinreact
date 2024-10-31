import React, { useEffect, useState } from "react";
import UserForm from "../../components/Forms/UserForm";

const UserManagement = () => {
  const [usersData, setUsersData] = useState<any>([]);
  const storeUsersData = (eachData: any) => {
    setUsersData([...usersData, eachData]);
  };

  return (
    <div className="row m-0 p-0">
      <div className="col-4">
        <UserForm usersData={usersData} storeUsersData={storeUsersData} />
      </div>
      <div className="col-8"></div>
    </div>
  );
};

export default UserManagement;
