import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const SignOut = () => {
  const [user, dispatchUser] = useContext(UserContext);

  localStorage.clear();
  dispatchUser("");

  return <div className="container text-white">Signing Out....</div>;
};

export default SignOut;
