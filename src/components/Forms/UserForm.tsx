import React, { useState } from "react";
import "./UserForm.scss";
import { citiesList, sexList, skillsList } from "../../constants/commonConstants";
type UserFromTypes = {
  usersData: any[];
  storeUsersData: (eachData: any) => void;
};
const intialState = {
  fname: "",
  phoneNumber: "",
  description: "",
  skill: [],
  city: "",
  sex: "",
};
const UserForm: React.FC<UserFromTypes> = ({ usersData, storeUsersData }) => {
  const [userForm, setUserForm] = useState<any>(intialState);
  const { fname, phoneNumber, description, skill, city, sex } = userForm;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(userForm);
    storeUsersData(userForm);
    setUserForm(intialState);
  };
  const handleChange = (e: React.ChangeEvent<any>, someValue?: any) => {
    const { name, value } = e.target;

    setUserForm((prevState: any) => {
      return {
        ...prevState,
        [name]: ["sex"].includes(name)
          ? someValue
          : "skill" == name
          ? prevState.skill.includes(value)
            ? prevState.skill.filter((x: any) => x != value)
            : [...prevState.skill, value]
          : value,
      };
    });
  };

  return (
    <div>
      <form className="userForm" onSubmit={handleSubmit}>
        <h4 className="userHeader">User Form</h4>
        <div>
          <label className="userFormLabels">First Name</label>
          <input type="string" name="fname" value={fname} required onChange={handleChange} className="form-control" />
        </div>
        <div>
          <label className="userFormLabels">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            min="1"
            max="5"
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="userFormLabels">Cities</label>
          <select name="city" value={city} onChange={handleChange} required className="form-control">
            <option value="" disabled>
              ---Select---
            </option>
            {citiesList.map((x, index) => {
              return (
                <option key={index} value={x.value} disabled={x.disabled}>
                  {x.label}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label className="userFormLabels">Skills</label>
          {skillsList.map((x, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  type="checkbox"
                  name="skill"
                  value={x.value}
                  checked={skill.includes(x.value)}
                  onChange={(e) => handleChange(e, x.value)}
                  className="form-check-input "
                />{" "}
                <label className="inputValues">{x.label}</label>
              </React.Fragment>
            );
          })}
        </div>
        <div>
          <label className="userFormLabels">Sex</label>
          {sexList.map((x, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  key={index}
                  required
                  type="radio"
                  name="sex"
                  value={sex}
                  checked={sex == x.value}
                  onChange={(e) => handleChange(e, x.value)}
                  className="form-control-checked"
                />{" "}
                <label className="inputValues">{x.label}</label>
              </React.Fragment>
            );
          })}
        </div>
        <div>
          <label className="userFormLabels">Description</label>
          <textarea
            name="description"
            value={description}
            required
            onChange={handleChange}
            rows={3}
            cols={30}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
