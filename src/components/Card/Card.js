import React from "react";
import Stars from "../Starts/Stars";

const Card = () => {
  return (
    <div className="my-6 p-5 border-solid border-1 rounded-lg border-transparent shadow-lg">
      <img className="mx-auto" src="https://picsum.photos/200/300" alt="" />
      <div className="text-center p-3">
        <h2 className="text-2xl">Book Title</h2>
        <p>Author Name</p>
        <Stars />
        <p className="text-xl">$123</p>
      </div>
    </div>
  );
};

export default Card;
