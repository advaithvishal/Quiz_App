import React, { useEffect, useState } from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const currentProgress = ((currentQuestion + 1) / totalQuestions) * 100;
      setProgress(currentProgress);
    };

    calculateProgress();
  }, [currentQuestion, totalQuestions]);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;