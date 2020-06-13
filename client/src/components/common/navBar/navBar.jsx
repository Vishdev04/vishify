import React, { useState } from "react";
import { Link } from "@reach/router";
import "./navBar.scss";

const Navbar = ({ navLinks, classAddition }) => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className={"navbar navbar-expand-lg" + classAddition}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Vishify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {navLinks.map(({ link, value }) => {
              return (
                <Link
                  key={link}
                  onClick={() => setActiveLink({ link })}
                  className={
                    activeLink.link === link
                      ? "nav-item nav-link active"
                      : "nav-item nav-link"
                  }
                  to={"/" + link}
                >
                  {value}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
