import React from 'react';
import './App.css';  // Import CSS for styling
import Quiz from './Quiz';  // Import the Quiz component

function App() {
  return (
    <div className="quiz-container">
      <h1>Welcome to the Quiz App!</h1>
      <Quiz />  {/* Render the Quiz component */}
    </div>
  );
}

export default App;
