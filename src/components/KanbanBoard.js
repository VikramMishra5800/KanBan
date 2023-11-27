import React from "react";
import TicketColumn from "./TicketColumn";

const KanbanBoard = ({ tickets, users, groupingOption, sortOption }) => {

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
    <div style={{display: 'flex', backgroundColor: '#f0f0f0', padding: '7px 25px'}}>
      {Object.entries(sortGroupTickets).map(([groupName,allTickets])=>{
        return (<TicketColumn key = {groupName} users = {users} title={groupName} tickets={allTickets} groupingOption={groupingOption}/>)
      })}
    </div>
  );
};

export default KanbanBoard;