import React, { useState, useEffect } from 'react';
import { UserProvider } from './UserContext.js';

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    console.log(userName, 'userName');
  }, [userName]);
  return (
    <UserProvider value={{ userName, setUserName }}>{children}</UserProvider>
  );
};
