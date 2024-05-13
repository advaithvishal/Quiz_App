import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import ProgressBar from './ProgressBar';

const QuizContainer = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleAnswer = (answer) => {
    const isCorrect = questions[currentQuestion]?.correctAnswer === answer;
    if (isCorrect) setScore(score + 1);
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);
    nextQuestion();
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers([]);
    setIsQuizCompleted(false);
  };

  useEffect(() => {
    if (currentQuestion === questions.length) {
      setIsQuizCompleted(true);
    }
  }, [currentQuestion, questions.length]);

  return (
    <div className="container">
      <ProgressBar
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
      />
      {isQuizCompleted ? (
        <Result score={score} totalQuestions={questions.length} restart={restart} />
      ) : questions.length > 0 && currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default QuizContainer;