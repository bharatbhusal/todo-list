import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Creating a root for the React application, targeting the element with id 'root'
const root = createRoot(document.getElementById('root'));

// Rendering the App component into the root
root.render(
  <App />
);
