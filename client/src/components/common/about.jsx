import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Vishify | About Vishal</title>
      </Helmet>
      <div className="content">
        <h1 className="title">
          Welcome to <strong>Vishify</strong>
        </h1>
        <p>Vishify is an Social application made with MERN Stack.</p>
        <p>
          It is an Assignment Project showcasing Auth - Post - Comment for
          Edgistify Interview Round 2.
        </p>
      </div>
    </div>
  );
};

export default About;
