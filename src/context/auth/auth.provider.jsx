import React, { useReducer } from "react";
import { AuthContext } from "./auth.context";
const isBrowser = typeof window !== "undefined";
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem("access_token"),
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
