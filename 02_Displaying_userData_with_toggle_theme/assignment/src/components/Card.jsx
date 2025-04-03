
import React from "react";
import "./Card.css"; // Import the CSS file

export const Card = (props) => {
  return (
    <div className="card">
      <ul>
        <li><strong>ID:</strong> {props.userid}</li>
        <li><strong>Name:</strong> {props.username}</li>
        <li><strong>Contact number:</strong> {props.phone}</li>
        <li><strong>Email:</strong> {props.useremail}</li>
      </ul>
    </div>
  );
};