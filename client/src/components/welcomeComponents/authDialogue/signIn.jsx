import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { Link, navigate } from "@reach/router";
import { FormEmail, FormPassword } from "../../common/formInputs";
import AuthHeaderButton from "./authHeaderBtn";
import { UserContext } from "../../../context/userContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext);

  const handleSignin = async () => {
    const responce = await fetch("/api/auth", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await responce.json();

    if (data.error) {
      toast.error(data.error);
      return;
    }

    toast.success("Logged in Succesfully");
    localStorage.setItem("vishify-auth-token", data["authToken"]);
    localStorage.setItem("vishify-user-detail", JSON.stringify(data.user));
    setUser({ user: data.user });
    navigate("/posts");
  };

  return (
    <div className="form-holder col-lg-5 col-md-6">
      <Helmet>
        <title>Vishify | Sign In</title>
      </Helmet>

      <AuthHeaderButton activeForm={"signin"} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignin();
        }}
      >
        <FormEmail
          icon="envelope"
          value="Email Address"
          handleChange={(email) => setEmail(email)}
        />
        <FormPassword
          icon="lock"
          value="Password"
          handleChange={(password) => setPassword(password)}
        />

        <Link to="/auth/signin">
          <p>Forgot Password?</p>
        </Link>

        <div className="form-group button">
          <button type="submit" className="btn">
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
