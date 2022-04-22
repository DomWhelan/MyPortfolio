import React from "react";
import "animate.css";
import ReactPlayer from "react-player";
import Chal1Vid from "../Videos/Chal1Vid";
import Pic1 from "../Images/Pic1.png";

export default function Projects() {
  return (
    <div className="container">
      <h1 className="animate__animated animate__bounce mt-3">
        My Software Development Projects
      </h1>
      <hr />
      <h3 className="">Python Projects</h3>
      <hr />
      <div className="d-flex ">
        <div className="projDsp p-2">
          <h4>
            Semester 1 Challenge 1 <br /> "4 in a row" game
          </h4>
          <ul>
            <li>Language: Python</li>
            <li>
              Sources:{" "}
              <ul>
                <li>Youtube</li>
                <li>
                  Keyin College <br /> Intro to Python lectures/material
                </li>
              </ul>{" "}
            </li>
            <li></li>
          </ul>
          <img src={Pic1} alt="pic" width="200rem" />
        </div>

        <div className="projDsp p-2">
          <h4>
            Semester 1 Challenge 2 <br /> "3rd Dimension" plugin
          </h4>
          <ul>
            <li>Language: Python</li>
            <li>
              Sources:{" "}
              <ul>
                <li>GitHub</li>
                <li>w3schools</li>
                <li>Youtube</li>
                <li>
                  Keyin College <br /> "Intro to Python" lectures/material
                </li>
              </ul>
              <img src={Pic1} alt="pic" width="200rem" />
            </li>
          </ul>
        </div>
        <div className="projDsp p-2">
          <h4>
            Semester 2 Challenge 1 <br /> "PBnJ" website
          </h4>
          <ul>
            <li>Languages: html, js, css</li>
            <li>
              Sources:{" "}
              <ul>
                <li>w3schools</li>
                <li>Youtube</li>
                <li>
                  Keyin College <br /> "Web Development" lectures/material
                </li>
              </ul>
              <img src={Pic1} alt="pic" width="200rem" />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <h3>html Projects</h3>
      <hr />
      <div className="d-flex ">
        <div className="projDsp p-2">
          <h4>
            Semester 1 Challenge 1 <br /> "4 in a row" game
          </h4>
          <ul>
            <li>Language: Python</li>
            <li>
              Sources:{" "}
              <ul>
                <li>Youtube</li>
                <li>
                  Keyin College <br /> Intro to Python lectures/material
                </li>
              </ul>{" "}
            </li>
            <li></li>
          </ul>
          <img src={Pic1} alt="pic" width="200rem" />
        </div>

        <div className="projDsp p-2">
          <h4>
            Semester 1 Challenge 2 <br /> "3rd Dimension" plugin
          </h4>
          <ul>
            <li>Language: Python</li>
            <li>
              Sources:{" "}
              <ul>
                <li>GitHub</li>
                <li>w3schools</li>
                <li>Youtube</li>
                <li>
                  Keyin College <br /> "Intro to Python" lectures/material
                </li>
              </ul>
              <img src={Pic1} alt="pic" width="200rem" />
            </li>
          </ul>
        </div>
        <div className="projDsp p-2">
          <h4>
            Semester 2 Challenge 1 <br /> "PBnJ" website
          </h4>
          <ul>
            <li>Languages: html, js, css</li>
            <li>
              Sources:{" "}
              <ul>
                <li>w3schools</li>
                <li>Youtube</li>
                <li>
                  Keyin College <br /> "Web Development" lectures/material
                </li>
              </ul>
              <img src={Pic1} alt="pic" width="200rem" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
