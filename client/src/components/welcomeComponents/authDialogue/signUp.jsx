import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { FormText, FormEmail, FormPassword } from "../../common/formInputs";
import AuthHeaderButton from "./authHeaderBtn";
import { navigate } from "@reach/router";
import { UserContext } from "../../../context/userContext";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext);

  const handleSignup = async () => {
    const responce = await fetch("/api/user/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await responce.json();

    if (data.error) {
      toast.error(data.error);
      return;
    }

    toast.success("Profile Created Succesfully");
    localStorage.setItem(
      "vishify-auth-token",
      responce.headers.get("x-auth-token")
    );
    localStorage.setItem("vishify-user-detail", data.user);
    setUser({ user: data.user });
    navigate("/posts");
  };

  return (
    <div className="form-holder col-lg-5 col-md-6 col-sm-12">
      <Helmet>
        <title>Vishify | Sign Up</title>
      </Helmet>

      <AuthHeaderButton activeForm={"signup"} />

      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
      >
        <FormText
          icon="user"
          value="Your Name"
          handleChange={(name) => setName(name)}
        />
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

        <div className="form-group button">
          <button type="submit" className="btn">
            CONTINUE
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
