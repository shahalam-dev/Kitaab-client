import React from "react";
// import useRatings from "../../hooks/useRatings";

const Stars = ({ stars }) => {
  // const starWidth = useRatings(stars);
  return (
    <>
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: "90%" }}></div>
      </div>
      <span
        className="number-rating fw-bold fs-5"
        style={{ marginLeft: "8px", color: "#40916c" }}
      >
        {stars}
      </span>
    </>
  );
};

export default Stars;
