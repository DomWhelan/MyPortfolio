import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function Chal1Vid() {
  const [videoPath, setVideoFilePath] = useState(null);

  const handleVideoUpload = (event) => {
    const [file] = event.target.files;
    setVideoFilePath(URL.createObjectURL(file));
  };
  return (
    <>
      <input type="file" onChange={handleVideoUpload} />
      <ReactPlayer url={"./Flicker.mp4"} width="100%" height="100%" controls />
    </>
  );
}
