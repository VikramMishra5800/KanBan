import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import "../src/styles/nav.css";

function App() {

  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status'); // Default grouping option
  const [sortOption, setSortOption] = useState('priority'); // Default sorting option

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[]);

  return (
    <div>
      <nav>
        <label>Grouping:</label>
        <select value={groupingOption} onChange={(e) => setGroupingOption(e.target.value)}>
          <option value="status">Status</option>
          <option value="userId">User</option>
          <option value="priority">Priority</option>
        </select>

        <label>Ordering:</label>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </nav>

      <KanbanBoard tickets={tickets} users={users} groupingOption={groupingOption} sortOption={sortOption} />
    </div>
  );
}

export default App;
