import React, { useContext, useEffect } from "react";
import WelcomePage from "./welcomePage/welcomePage";
import BlogPage from "./blogPage/blogPage";
import { UserContext } from "../context/userContext";
import { navigate } from "@reach/router";

const RoutePage = () => {
  const [user, dispatchUser] = useContext(UserContext);

  useEffect(() => {
    const localUser = localStorage.getItem("vishify-user-detail");

    if (localUser) {
      dispatchUser(localStorage);
      navigate("/posts");
    } else {
      console.log("Evaluated false");
      navigate("/welcome");
    }
  }, [user, dispatchUser]);

  return <div className="App">{user ? <BlogPage /> : <WelcomePage />}</div>;
};

export default RoutePage;
