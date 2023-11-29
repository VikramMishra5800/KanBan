import React from "react";
import TicketColumn from "./TicketColumn";
import "../styles/kanban.css";
import { KanbanState } from "../context/KanbanProvider.js";

const KanbanBoard = () => {

    const { tickets, groupingOption, sortOption } = KanbanState();

    const groupTickets = (tickets, groupingOption) => {
        return tickets.reduce((grouped, ticket) => {
          const key = ticket[groupingOption];
          grouped[key] = [...(grouped[key] || []), ticket];
          return grouped;
        }, {});
      };
    
    const sortTickets = (groupedTickets, sortOption) => {
        // Sort each group of tickets based on the selected option
        for (const group in groupedTickets) {
          const ticketsInGroup = groupedTickets[group];
          if (sortOption === 'priority') {
            // Sort by priority
            ticketsInGroup.sort((a, b) => b.priority - a.priority);
          } else if (sortOption === 'title') {
            // Sort by title
            ticketsInGroup.sort((a, b) => a.title.localeCompare(b.title));
          }
        }
        return groupedTickets;
    }

  const groupedTickets = groupTickets(tickets,groupingOption);
  const sortGroupTickets = sortTickets(groupedTickets,sortOption);

  return (
    <div id="kanban">
      {Object.entries(sortGroupTickets).reverse().map(([groupName,allTickets])=>{
        return (<TicketColumn key = {groupName} title={groupName} tickets={allTickets}/>)
      })}
    </div>
  );
};

export default KanbanBoard;