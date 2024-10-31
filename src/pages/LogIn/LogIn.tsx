import React, { useState } from "react";
import "./LogIn.scss";
import { useDispatch } from "react-redux";
import { setAuthLogin } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const [logInForm, setLogInForm] = useState({ username: "", password: "" });
  const [showError, setShowError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, password } = logInForm;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogInForm({ ...logInForm, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username == "admin" && password == "cool") {
      dispatch(setAuthLogin({ userName: username }));
      navigate("/dashboard");
    } else {
      setShowError("Invalid Credentials");
    }
  };

  return (
    <div className="logInCard">
      <h6 className="logInHeader">Log In</h6>
      <form onSubmit={handleSubmit}>
        <div className="formField">
          <input
            type="string"
            name="username"
            value={username}
            required
            className="form-control shadow-none"
            placeholder="User Name"
            onChange={handleChange}
          />
        </div>
        <div className="formField">
          <input
            type="password"
            name="password"
            value={password}
            required
            className="form-control shadow-none"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <span className="showError">{showError?.length > 0 && showError}</span>
        <div className="formForget">
          <div>
            <input className="form-check-input shadow-none " type="checkbox" value="" id="flexCheckDefault" />
            <span>Remember Me</span>
          </div>
          <div>
            <a href="www.google.com" title="www.google.com">
              Forgot Password ?
            </a>
          </div>
        </div>
        <div className="formSubmitButton">
          <button className="btn btn-primary col-6 ">Submit</button>
        </div>
        <div className="formSignup">
          <span>Not Registered?</span>
          <a href="*" title="SignUp *">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
