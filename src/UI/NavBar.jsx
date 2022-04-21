import React from "react";
import "../Styles/myStyle.css";
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar navbar-nav">
      <section className="navbarTitle">
        <span>Logo?</span>
        <span className="title">{"<My_Portfolio>"}</span>
      </section>

      <ul className="navbarLinks">
        <li>
          <Link
            to="/projects"
            style={{ color: "azure" }}
            activestyle={{ color: "blue" }}
          >
            {"<Projects>"}
          </Link>
        </li>
        <li>
          <Link to="/experience" style={{ color: "azure" }}>
            {"<Experience>"}
          </Link>
        </li>
        <li>
          <Link to="/education" style={{ color: "azure" }}>
            {"<Education>"}
          </Link>
        </li>
        <li>
          <Link to="/aboutme" style={{ color: "azure" }}>
            {"<AboutMe>"}
          </Link>
        </li>
      </ul>
    </div>
  );
}
