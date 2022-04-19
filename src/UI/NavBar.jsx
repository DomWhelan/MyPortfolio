import React from "react";
import "../Styles/NavBar.css";
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <span>Logo?</span>
        <span className="title">{"<My_Portfolio>"}</span>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/projects" activeStyle={{}}>
              {"<Projects>"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" activeStyle={{}}>
              {"<Experience>"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" activeStyle={{}}>
              {"<Education>"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutme" activeStyle={{}}>
              {"<AboutMe>"}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
