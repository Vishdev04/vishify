import React from "react";
import { Link } from "@reach/router";

const AuthHeaderButton = ({ activeForm }) => {
  const headerButton = [
    { id: "signin", value: "Sign in" },
    { id: "signup", value: "Sign up" },
  ];

  return (
    <div className="btn-grp header-btn">
      {headerButton.map(({ id, value }) => {
        return (
          <Link
            key={id}
            to={"/auth/" + id}
            className={
              activeForm === id ? "btn btn-primary active" : "btn btn-primary"
            }
          >
            {value}
          </Link>
        );
      })}
    </div>
  );
};

export default AuthHeaderButton;
