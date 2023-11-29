import { useContext } from "react";
import KanbanContext from "./kanbanContext";
import { useState } from "react";

const KanbanProvider = ({children}) => {
    // Loading saved options from localStorage or use default values
    const savedGroupingOption = localStorage.getItem('groupingOption') || 'status';
    const savedSortOption = localStorage.getItem('sortOption') || 'priority';

    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [groupingOption, setGroupingOption] = useState(savedGroupingOption); 
    const [sortOption, setSortOption] = useState(savedSortOption);

    return (
        <KanbanContext.Provider
        value = {{
            tickets, setTickets, users, setUsers, groupingOption, setGroupingOption, sortOption, setSortOption,savedGroupingOption,savedSortOption
        }}>
            {children}
        </KanbanContext.Provider>
    )
}

export const KanbanState = () => {
    return (useContext(KanbanContext));
}

export default KanbanProvider;