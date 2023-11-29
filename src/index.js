import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import KanbanProvider from './context/KanbanProvider.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <KanbanProvider>
    <App />
    </KanbanProvider>
    </React.StrictMode>
  
);

reportWebVitals();
