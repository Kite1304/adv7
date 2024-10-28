import React, { useState } from 'react';
import Question from './Question';

const questionsData = [
  {
    questionText: 'What is the capital of the Philippines?',
    answerOptions: [
      { answerText: 'Manila', isCorrect: true },
      { answerText: 'Quezon City', isCorrect: false },
      { answerText: 'Cebu', isCorrect: false },
      { answerText: 'Davao', isCorrect: false },
    ],
  },
  {
    questionText: 'What color is the fruit orange?',
    answerOptions: [
      { answerText: 'Yellow', isCorrect: false },
      { answerText: 'Orange', isCorrect: true },
      { answerText: 'Green', isCorrect: false },
      { answerText: 'Red', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the hottest planet in our Solar System?',
    answerOptions: [
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Venus', isCorrect: true },
      { answerText: 'Mars', isCorrect: false },
      { answerText: 'Mercury', isCorrect: false },
    ],
  },
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questionsData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div>
      {quizFinished ? (
        <div>
          <h2>Your score: {score} out of {questionsData.length}</h2>
          <button onClick={handleRestartQuiz}>Retake Quiz</button>
        </div>
      ) : (
        <Question
          question={questionsData[currentQuestionIndex]} // Pass the current question
          onAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}

export default Quiz;
