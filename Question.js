import React from 'react';

function Question({ question, onAnswerOptionClick }) {
  // Check if the question object is defined before rendering
  if (!question) return null; // Return null if question is not defined

  return (
    <div>
      <h2>{question.questionText}</h2>
      {question.answerOptions.map((option, index) => (
        <button key={index} onClick={() => onAnswerOptionClick(option.isCorrect)}>
          {option.answerText}
        </button>
      ))}
    </div>
  );
}

export default Question;
