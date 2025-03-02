import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function SelectDocumentaryShort({ select }) {
  const [selected, setSelected] = useState(null);
  const bestDocS = [
    'Death by Numbers',
    'I Am Ready, Warden',
    'Incident',
    'Instruments of a Beating Heart',
    'he Only Girl in the Orchestra',
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
      {bestDocS.map((item, idx) => (
        <li key={`rating-${idx + 1}`}>
          <input
            type='radio'
            id={idx}
            name='docs'
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

export default SelectDocumentaryShort;
