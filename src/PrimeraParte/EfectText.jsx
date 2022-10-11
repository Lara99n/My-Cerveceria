import React from "react";
import "./EfectText.css";
import video from "./cerveza.mp4";

export const EfectText = () => {
  return (
    <div className="hero">
      <video className="video_cerveza" src={video} autoPlay muted loop></video>
      <h1 className="texto"> Cerveza bien fria</h1>
    </div>
  );
};
