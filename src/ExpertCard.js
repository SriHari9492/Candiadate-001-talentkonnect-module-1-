import React from "react";
import "./ExpertCard.css";

const ExpertCard = ({ expert }) => {
  return (
    <div className="expert-card">
      <h3>{expert.name}</h3>
      <p>{expert.skill}</p>
      <p>⭐ {expert.rating}</p>
      <button className="primary-btn">View Profile</button>
      <button className="secondary-btn">Message</button>
    </div>
    
  );
};

export default ExpertCard;
