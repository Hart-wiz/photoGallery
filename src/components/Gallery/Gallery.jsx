import React from "react";
import cam from "../../assets/pic-cam.png";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery" id="sample">
      <h1>Gallery</h1>
      <div>
        <img src={cam} alt="cam pics" />
        <img src={cam} alt="cam pics" />
        <img src={cam} alt="cam pics" />
        <img src={cam} alt="cam pics" />
        <img src={cam} alt="cam pics" />
        <img src={cam} alt="cam pics" />
      </div>
    </div>
  );
};

export default Gallery;
