import React from "react";
import TicketCard from "./TicketCard";
import img from "../images/DefaultImage.png";
import add from "../images/plus.png";
import more from "../images/option.png";
import done from "../images/approved.png";
import urgent from "../images/danger-sign.png";
import high from "../images/graph.png";
import low from "../images/mobile-signal.png";
import cancel from "../images/multiply.png";
import backlog from "../images/product.png";
import toDo from "../images/to-do-list.png";
import medium from "../images/volume.png";
import progress from "../images/work-in-progress.png";
import noPriority from "../images/option.png";
import "../styles/column.css"

const workStatus = {
  'Done': done,
  'Cancelled': cancel,
  'Todo': toDo,
  'Backlog': backlog,
  "In progress": progress,
};

const priority = {
  0: noPriority,
  1: low,
  2: medium,
  3: high,
  4: urgent,
};

const TicketColumn = ({ title, tickets, users, groupingOption }) => {
  const user = users.find((user) => user.id === title);
  const priorityMat = ["No priority", "Low", "Medium", "High", "Urgent"];
  return (
    <div>
      <h4>
        <span style={{display: "flex", justifyContent: "space-between", alignContent: "center"}}>
          {user ? (
            <>
              <img
                src={user.image ? user.image : img}
                alt={user.name}
                className="image"
              />
              {user.name}
            </>
          ) : groupingOption === "priority" ? (
            <>
              <img
                src={priority[title]}
                alt={priorityMat[title]}
                className="image"
              />
              {priorityMat[title]}
            </>
          ) : (
            <>
            <img
                src={workStatus[title]}
                alt={workStatus[title]}
                className="image"
            />
              {title}
            </>
          )}
          <span style={{marginLeft: "15px"}}>
            {tickets.length}
          </span>
        </span>
        
        <span style={{display: "flex", justifyContent: "space-between", alignContent: "center",marginRight: "35px"}}>
          <img src={add} alt={add}  className="addAndmore"/>
          <img src={more} alt={more} className="addAndmore"/>
        </span>
      </h4>
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          users={users}
          ticket={ticket}
          groupingOption={groupingOption}
        />
      ))}
    </div>
  );
};

export default TicketColumn;
