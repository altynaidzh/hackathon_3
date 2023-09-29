import React from "react";
import homephoto from "../../ph.png";
import "./HomePhoto.css"; // Обратите внимание на изменение пути импорта

const HomePhoto = () => {
  return (
    <div className="phot">
      <img src={homephoto} alt="ss" />
    </div>
  );
};

export default HomePhoto;
