import React from "react";
import "animate.css";
import Pic1 from "../Images/Pic1.png";

export default function Home() {
  return (
    <div>
      <h1 className="fira text-center hello">Hello World!</h1>
      <h2 className="fira text-center">myName = "Dominic Whelan"</h2>
      <img
        src={Pic1}
        alt="Pic1"
        width="240rem"
        height="160rem"
        className="pic1 animate__animated animate__slideInRight"
      />
      <img
        src={Pic1}
        alt="Pic2"
        width="240rem"
        height="160rem"
        className="pic2 animate__animated animate__slideInRight"
      />
      <img
        src={Pic1}
        alt="Pic3"
        width="240rem"
        height="160rem"
        className="pic3 animate__animated animate__slideInRight"
      />
      <img
        src={Pic1}
        alt="Pic4"
        width="240rem"
        height="160rem"
        className="pic4 animate__animated animate__slideInRight"
      />
    </div>
  );
}
