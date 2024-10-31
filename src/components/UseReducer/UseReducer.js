import React, { useState, useReducer } from "react";
import "./UseReducer.css";
const intialState = {
  list: [],
};
function reducer(state, action) {
  console.log(action, state);
  switch (action.type) {
    case "ADD":
      return { ...state, list: [...state.list, action.payload] };
    case "DELETE":
      return { ...state, list: state.list.filter((y) => y.todoTask != action.payload.todoTask) };
    case "EDIT":
      return {
        ...state,
        list: state.list.map((y) => (y.id == action.payload.id ? { ...y, todoTask: action.payload.todoTask } : y)),
      };
    default:
      return state;
  }
}
export const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [task, setTask] = useState("");
  const [updateCheck, setUpdateCheck] = useState({ check: false, id: null });
  const { list = [] } = state;
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateCheck.check) {
      dispatch({ type: "EDIT", payload: { todoTask: task, id: updateCheck.id } });
      setUpdateCheck({ check: false, id: null });
    } else {
      dispatch({ type: "ADD", payload: { todoTask: task, update: false, id: list?.length + 1 } });
    }
    setTask("");
  };
  const handleEdit = (x) => {
    setTask(x.todoTask);
    setUpdateCheck({ check: true, id: x.id });
  };
  const handleDelete = (x) => {
    dispatch({ type: "DELETE", payload: x });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Task</label>
        <input type="text" name="task" onChange={handleChange} value={task} />
        <button type="submit">{updateCheck.check ? "Update" : "Submit"}</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((x) => {
            return (
              <>
                <tr key={x.id}>
                  <td>{x.todoTask}</td>
                  <td>
                    {" "}
                    <button onClick={() => handleEdit(x)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(x)}>Delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// ===================================================
