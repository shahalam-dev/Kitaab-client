import React from "react";
import Card from "../Card/Card";

const CardGallery = () => {
  return (
    <div className="grid grid-cols-5 justify-items-center gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardGallery;
