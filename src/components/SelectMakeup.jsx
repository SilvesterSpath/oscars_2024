import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function SelectMakeup({ select }) {
  const [selected, setSelected] = useState(null);
  const bestMakeup = [
    'GOLDA',
    'MAESTRO',
    'OPPENHEIMER',
    'POOR THINGS',
    'SOCIETY OF THE SNOW',
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
      {bestMakeup.map((item, idx) => (
        <li key={`rating-${idx + 1}`}>
          <input
            type='radio'
            id={idx}
            name='makeup'
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

export default SelectMakeup;
