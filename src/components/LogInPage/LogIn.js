import React, { useState, useContext } from "react";
import { UserContext } from "../../context/usercontext/UserContext";
export default function LogIn() {
  const [fname, setFname] = useState("");
  const { setUserName } = useContext(UserContext);
  const handleChnage = (e) => {
    setFname(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(fname);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="fname" type="text" onChange={handleChnage} value={fname} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
