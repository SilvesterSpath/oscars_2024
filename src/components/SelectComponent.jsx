import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function SelectNominee({ select, category, nominees }) {
  const [selected, setSelected] = useState(null);
  const { feedbackEditState } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEditState.edit) {
      setSelected(feedbackEditState.item.rating);
    }
  }, [feedbackEditState]);

  const handleChange = (e) => {
    setSelected(parseInt(e.currentTarget.id));
    select(e.currentTarget.value);
  };

  return (
    <ul className='rating'>
      {nominees.map((item, idx) => (
        <li key={`${category}-rating-${idx + 1}`}>
          <input
            type='radio'
            id={idx}
            name={category}
            value={item}
            onChange={handleChange}
            checked={selected === idx}
          />
          <label htmlFor={idx}>{item}</label>
        </li>
      ))}
    </ul>
  );
}

export default SelectNominee;
