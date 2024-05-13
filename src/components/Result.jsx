import React from 'react';

const Result = ({ score, totalQuestions, restart }) => {
  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      <p>You scored {score} out of {totalQuestions} questions.</p>
      <button onClick={restart}>Restart Quiz</button>
    </div>
  );
};

export default Result;