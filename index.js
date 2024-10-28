import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: your global styles
import App from './App'; // Make sure the path is correct
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
