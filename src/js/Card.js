import React from "react";

export const Card = ({ apod }) => {
  return (
    <div className="card">
      <img
        src={apod.url}
        alt={apod.title}
      />
      <div className="cardContent">
        <h2>{apod.title}</h2>
        <span>Date: {apod.date}</span>
      </div>
    </div>
  );
};

export default Card;
