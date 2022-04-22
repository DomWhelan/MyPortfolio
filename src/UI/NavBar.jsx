import React from "react";
import "../Styles/myStyle.css";
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div className="navbar d-flex">
        <span className="title fira">{"<My_Portfolio>"}</span>
      </div>
      <div className="links">
        <Link
          to="/"
          className="fira mt-1"
          style={{ color: "black", textDecoration: "none" }}
        >
          {"<Home>"}
        </Link>

        <Link
          to="/projects"
          className="fira mt-1"
          style={{ color: "black", textDecoration: "none" }}
        >
          {"<Projects>"}
        </Link>

        <Link
          to="/experience"
          className="fira mt-1"
          style={{ color: "black", textDecoration: "none" }}
        >
          {"<Experience>"}
        </Link>

        <Link
          to="/education"
          className="fira mt-1"
          style={{ color: "black", textDecoration: "none" }}
        >
          {"<Education>"}
        </Link>

        <Link
          to="/aboutme"
          className="fira mt-1"
          style={{ color: "black", textDecoration: "none" }}
        >
          {"<AboutMe>"}
        </Link>
      </div>
    </div>
  );
}
