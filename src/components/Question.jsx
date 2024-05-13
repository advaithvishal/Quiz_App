import React from 'react';

const Question = ({ question, handleAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question.questionText}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <div key={index} className="option">
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;