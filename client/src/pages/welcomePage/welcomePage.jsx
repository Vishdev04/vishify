import React, { useContext } from "react";
import { Router } from "@reach/router";
import { ToastContainer } from "react-toastify";
import Navbar from "../../components/common/navBar/navBar";
import Signin from "../../components/welcomeComponents/authDialogue/signIn";
import Signup from "../../components/welcomeComponents/authDialogue/signUp";
import Home from "../../components/welcomeComponents/home";
import About from "../../components/common/about";
import AuthDialogue from "../../components/welcomeComponents/authDialogue/authDialogue";
import { UserContext } from "../../context/userContext";
import "react-toastify/dist/ReactToastify.css";
import "./welcomePage.scss";
import Background from "../../components/common/background";

const WelcomePage = () => {
  const [user, setUser] = useContext(UserContext);
  console.log("test from Welcome", user);
  const navLinks = [
    { link: "welcome", value: "Home" },
    { link: "about", value: "About" },
    { link: "auth/signin", value: "Sign-in/Sign-up" },
  ];

  return (
    <div>
      <Background />
      <Navbar navLinks={navLinks} classAddition="" />
      <ToastContainer />

      <Router>
        <Home path="/welcome" default />
        <About path="/about" />
        <AuthDialogue path="/auth">
          <Signup path="signup" />
          <Signin path="signin" default />
        </AuthDialogue>
      </Router>
    </div>
  );
};

export default WelcomePage;
