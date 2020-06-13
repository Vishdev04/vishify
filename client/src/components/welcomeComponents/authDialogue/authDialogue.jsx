import React from "react";
import "./authDialogue.scss";
import AuthInfo from "./authInfo";

const AuthDialogue = (props) => {
  return (
    <div className="container form-container row">
      <AuthInfo />

      {props.children}
    </div>
  );
};

export default AuthDialogue;
