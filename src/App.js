import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import "../src/styles/nav.css";
import { KanbanState } from './context/KanbanProvider.js';

function App() {

  const {setTickets,setUsers,groupingOption,setGroupingOption,sortOption,setSortOption} = KanbanState();

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  });

  // Saving the selected options to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('groupingOption', groupingOption);
    localStorage.setItem('sortOption', sortOption);
  }, [groupingOption,sortOption]);


  const [optionsVisible, setOptionsVisible] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <button
          className="display-btn"
          onClick={() => {
            setOptionsVisible(!optionsVisible);
          }}
        >
        Display
        </button>

        {optionsVisible && (
          <div className="options-container">
            <label>Grouping:</label>
            <select
              className="option-select"
              value={groupingOption}
              onChange={(e) => setGroupingOption(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>

            <label>Ordering:</label>
            <select
              className="option-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        )}
      </nav>

      <KanbanBoard/>
    </div>
  );
}

export default App;
