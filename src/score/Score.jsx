import React, { useState, useContext, useEffect } from 'react';
import './score.css';
import FeedbackContext from '../context/FeedbackContext';

function Score({ team }) {
  const { scores, addItem } = useContext(FeedbackContext);
  const [point, setPoint] = useState(0);

  useEffect(() => {
    setPoint(scores.find((item) => item.name === team).score);
  }, []);

  const handleIncrement = () => {
    setPoint(point + 1);
    const newFeedback = { name: team, score: point + 1 };
    addItem(newFeedback, 'scores');
  };

  const handleDecrement = () => {
    if (point > 0) {
      setPoint(point - 1);
      const newFeedback = { name: team, score: point - 1 };
      addItem(newFeedback, 'scores');
    }
  };

  return (
    <div className='objScore'>
      <div className='nameTeam'>{team}</div>
      <div className='pointScore'>{point}</div>
      <div>
        <button className='incrementer' onClick={handleIncrement}>
          +
        </button>
        <button className='incrementer' onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Score;
