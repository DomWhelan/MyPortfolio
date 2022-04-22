import React from "react";
import "animate.css";
import Pic1 from "../Images/Pic1.jpg";
import Pic2 from "../Images/Pic2.jpg";
import Pic3 from "../Images/Pic3.jpg";
import Pic4 from "../Images/Pic4.jpg";
import Pic5 from "../Images/Pic5.jpg";
import Pic6 from "../Images/Pic6.jpg";

export default function Projects() {
  const dspS1 = () => {
    const item = document.querySelector(".s1");
    item.style.display = "contents";
  };
  const hideS1 = () => {
    const item = document.querySelector(".s1");
    item.style.display = "none";
  };
  const dspS2 = () => {
    const item = document.querySelector(".s2");
    item.style.display = "contents";
  };
  const hideS2 = () => {
    const item = document.querySelector(".s2");
    item.style.display = "none";
  };
  return (
    <div className="container">
      <h1 className="animate__animated animate__bounce mt-3">
        My Software Development Projects
      </h1>
      <hr />
      <h3 className="">
        {" "}
        <span>Semester 1 Projects</span>{" "}
        <button className="btn btn-secondary" onClick={dspS1}>
          Show
        </button>{" "}
        <button className="btn btn-secondary" onClick={hideS1}>
          Hide
        </button>
      </h3>
      <hr />
      <div className="s1">
        <div className="d-flex">
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
            <img src={Pic1} alt="pic" />
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
              </li>
            </ul>
            <img src={Pic2} alt="pic" />
          </div>
          <div className="projDsp p-2">
            <h4>
              Semester 1 Final Sprint <br /> Robomaster
            </h4>
            <ul>
              <li>Languages: python</li>
              <li>
                Sources:{" "}
                <ul>
                  <li>DJI</li>
                  <li>Youtube</li>
                  <li>
                    Keyin College <br /> "Intro to Python" lectures/material
                  </li>
                </ul>
              </li>
            </ul>
            <img src={Pic3} alt="pic" />
          </div>
        </div>
      </div>
      <hr />
      <h3>
        {" "}
        <span>Semester 2 Projects</span>{" "}
        <button className="btn btn-secondary" onClick={dspS2}>
          Show
        </button>{" "}
        <button className="btn btn-secondary" onClick={hideS2}>
          Hide
        </button>
      </h3>
      <hr />
      <div className="s2">
        <div className="d-flex">
          <div className="projDsp p-2">
            <h4>
              Semester 2 QAP 1 <br /> "Northern Flicker" website
            </h4>
            <ul>
              <li>Language: html,css</li>
              <li>
                Sources:{" "}
                <ul>
                  <li>Youtube</li>
                  <li>w3schools</li>
                  <li>
                    Keyin College <br /> "Web Development" lectures/material
                  </li>
                </ul>{" "}
              </li>
              <li></li>
            </ul>
            <img src={Pic4} alt="pic" />
          </div>

          <div className="projDsp p-2">
            <h4>
              Semester 2 CSS Project <br /> "Newfoundland" website
            </h4>
            <ul>
              <li>Language: html, CSS</li>
              <li>
                Sources:{" "}
                <ul>
                  <li>w3schools</li>
                  <li>Youtube</li>
                  <li>
                    Keyin College <br /> "Web Development" lectures/material
                  </li>
                </ul>
              </li>
            </ul>
            <img src={Pic5} alt="pic" />
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
              </li>
            </ul>
            <img src={Pic6} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
}
