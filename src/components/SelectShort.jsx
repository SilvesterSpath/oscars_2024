import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelectActor({ select }) {
  const [selected, setSelected] = useState(null);
  const bestShort = [
    'A Lien',
    'Anuja',
    "I'm Not a Robot",
    'The Last Ranger',
    'The Man Who Could Not Remain Silent',
  ];

  const handleChange2 = (e) => {
    console.log('that', e.target);
    setSelected(parseInt(e.currentTarget.id));
    select(e.currentTarget.value);
  };

  const { feedbackEditState } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEditState.edit) {
      setSelected(feedbackEditState.item.rating);
    }
  }, [feedbackEditState]);

  return (
    <ul className='rating'>
      {bestShort.map((item, idx) => (
        <li key={`rating-${idx + 1}`}>
          <input
            type='radio'
            id={idx}
            name='short'
            value={item}
            onChange={handleChange2}
            checked={selected === idx}
          />
          <label htmlFor={idx}>{item}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelectActor;
