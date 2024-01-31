import { Button, Card } from "antd";
import React from "react";
import { ImCancelCircle } from "react-icons/im";
import "./SyllabusCard.scss";

const SyllabusCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="main-header">
          <div className="card-title headingh4">Linux </div>
          <span className="caption1 btn-status active">Active</span>
        </div>
        <div className="btn-delete">
          <ImCancelCircle size={24} color="#2d3748" />
        </div>
      </div>

      <div className="subtitle2 card-content">
        <div>Lin v2.0</div> <div>|</div> <div> 4 days (12 hours)</div>{" "}
        <div>|</div> <div>Modified on 23/07/2022 by Jonhny Deediv</div>
      </div>
    </div>
  );
};

export default SyllabusCard;
