import React from "react";
import Navbar from "../../components/common/navBar/navBar";
import { Router } from "@reach/router";
import BlogView from "../../components/blogComponents/blogView";
import BlogList from "../../components/blogComponents/blogList";
import UserProfile from "../../components/blogComponents/userprofile";
import CreatePost from "../../components/blogComponents/createPost";
import Signout from "../../components/blogComponents/signOut";
import About from "../../components/common/about";
import { ToastContainer } from "react-toastify";

import "./blogPage.scss";
import "react-toastify/dist/ReactToastify.css";

const BlogPage = () => {
  const navLinks = [
    { link: "newpost", value: "New Post" },
    { link: "me", value: "Profile" },
    { link: "signout", value: "SignOut" },
  ];

  return (
    <div>
      <Navbar navLinks={navLinks} classAddition=" dark" />

      <ToastContainer />

      <Router>
        <BlogList path="/posts" default />
        <UserProfile path="/me" />
        <About path="/about" />
        <CreatePost path="/newpost" />
        <Signout path="/signout" />
      </Router>
    </div>
  );
};

export default BlogPage;
