import React, { useReducer } from "react";
import { useState } from "react";
const LoginForm = () => {

  const initialstate = {
    name: "",
    email: "",
    location: "",
    location1: "",
    food: "",

  };

  const reducer = (state, action) => {
   //console.log(state);
    if (action.type === "input") {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialstate);
 
  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(state);
  }
  return (
    <div>
      <h1>Login Form</h1>

      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) =>
            dispatch({
              type: "input",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
        />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e) =>
            dispatch({
              type: "input",
              payload: { name: e.target.name, value: e.target.value },
            })
          }/>
        <label htmlFor="email">Location:</label>
        <input type="email" id="email" name="location"onChange={(e) =>
            dispatch({
              type: "input",
              payload: { name: e.target.name, value: e.target.value },
            })
          } />

        <label htmlFor="email">Location1:</label>
        <input type="email" id="email" name="location1"onChange={(e) =>
            dispatch({
              type: "input",
              payload: { name: e.target.name, value: e.target.value },
            })
          } />

        <label htmlFor="email">Food:</label>
        <input type="email" id="email" name="food"onChange={(e) =>
            dispatch({
              type: "input",
              payload: { name: e.target.name, value: e.target.value },
            })
          } />

        <button type="submit" onClick={(e)=>handelSubmit(e)}>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
