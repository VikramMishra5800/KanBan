import React from "react";
import img from "../images/DefaultImage.png";
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
import "../styles/card.css"

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

const TicketCard = ({ ticket, users, groupingOption }) => {
  const user = users.find((user) => user.id === ticket.userId);
  const priorityMat = ["No priority", "Low", "Medium", "High", "Urgent"];
  return (
    <div className="ticketCard">
      <div className="userInfo">
        <div>{ticket.id}</div>
        {groupingOption !== "userId" && (
          <img
            src={user.image ? user.image : img}
            alt={user.name}
            className="image"
          />
        )}
      </div>

      {groupingOption !== "status" && (
        <>
          <img
            src={workStatus[ticket.status]}
            alt={ticket.status}
            className="image"
          />
          <h4>{ticket.title}</h4>
        </>
      )}
      {groupingOption !== "priority" && (
          <span>
            <img
              src={priority[ticket.priority]}
              alt={priorityMat[ticket.priority]}
              className="image"
            />
          </span>
      )}
      <span className="features">{ticket.tag[0]}</span>
    </div>
  );
};

export default TicketCard;
