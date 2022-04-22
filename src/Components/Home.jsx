import React, { useEffect, useState } from "react";
import "animate.css";
import Pic1 from "../Images/Pic1.jpg";
import Pic2 from "../Images/Pic2.jpg";
import Pic3 from "../Images/Pic3.jpg";
import Pic4 from "../Images/Pic4.jpg";
import Pic5 from "../Images/Pic5.jpg";
import Pic6 from "../Images/Pic6.jpg";

export default function Home() {
  return (
    <div>
      <h1 className="fira text-center hello">Hello World!</h1>
      <h2 className="fira text-center">myName = "Dominic Whelan"</h2>
      <div>
        <img
          src={Pic1}
          alt="Pic1"
          width="240rem"
          height="160rem"
          className="pic1 animate__animated animate__fadeIn"
        />
        <img
          src={Pic2}
          alt="Pic2"
          width="240rem"
          height="160rem"
          className="pic2 animate__animated animate__fadeIn"
        />
        <img
          src={Pic3}
          alt="Pic3"
          width="240rem"
          height="160rem"
          className="pic3 animate__animated animate__fadeIn"
        />
        <img
          src={Pic4}
          alt="Pic4"
          width="240rem"
          height="160rem"
          className="pic4 animate__animated animate__fadeIn"
        />
        <img
          src={Pic5}
          alt="Pic5"
          width="240rem"
          height="160rem"
          className="pic5 animate__animated animate__fadeIn"
        />
        <img
          src={Pic6}
          alt="Pic6"
          width="240rem"
          height="160rem"
          className="pic6 animate__animated animate__fadeIn"
        />
      </div>
    </div>
  );
}
