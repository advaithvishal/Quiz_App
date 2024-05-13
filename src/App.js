import React from 'react';
import ReactDOM from 'react-dom';
import QuizContainer from './components/QuizContainer';
import './App.css';
import './App.css';
import './Quiz.css';
import reportWebVitals from './reportWebVitals';

const questions = [
  {
    questionText: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    questionText: 'What is the largest ocean in the world?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    correctAnswer: 'Pacific Ocean',
  },
  {
    questionText: 'What is the smallest planet in our solar system?',
    options: ['Earth', 'Mars', 'Mercury', 'Venus'],
    correctAnswer: 'Mercury',
  },
  {
    questionText: 'Who painted the famous artwork "Mona Lisa"?',
    options: ['Michelangelo', 'Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso'],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    questionText: 'What is the currency of Japan?',
    options: ['Yen', 'Euro', 'Dollar', 'Pound'],
    correctAnswer: 'Yen',
  },
];

const App = () => {
  return (
    <div>
      <h1>Quiz App</h1>
      <QuizContainer questions={questions} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Add this line
const meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, initial-scale=1.0';
document.head.appendChild(meta);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;