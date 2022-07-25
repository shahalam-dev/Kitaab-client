import React from "react";
import Card from "../Card/Card";

const PopularBooks = () => {
  return (
    <div className="grid grid-rows-2 sm:grid-cols-1 md:grid-cols-4 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default PopularBooks;
