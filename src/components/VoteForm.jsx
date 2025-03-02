import { useState, useContext, useEffect } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import FeedbackContext from '../context/FeedbackContext';
import SelectComponent from './SelectComponent';

function VoteForm({ category, nominees }) {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [message, setMessage] = useState('Select a nominee and send your vote');
  const [selectedNominee, setSelectedNominee] = useState('');

  const { addItem, feedbackEditState, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEditState.edit) {
      setBtnDisabled(false);
      setText(feedbackEditState.item.text);
      setSelectedNominee(feedbackEditState.item[category]);
    }
  }, [
    feedbackEditState.edit,
    feedbackEditState.item.text,
    category,
    feedbackEditState.item,
  ]);

  const handleTextChange = (e) => {
    if (text.length > 0) {
      setBtnDisabled(false);
      setMessage(null);
    } else {
      setBtnDisabled(false);
      setMessage('Select a nominee and send your vote');
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text, category, selectedNominee);

    if (text.trim().length > 1) {
      const newFeedback = {
        text,
        [category]: selectedNominee,
      };
      if (feedbackEditState.edit) {
        updateFeedback(feedbackEditState.item.id, newFeedback);
      } else {
        addItem(newFeedback, category);
        setText('');
      }
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Oscar nominations for best {category.replace('-', ' ')}:</h2>
        <SelectComponent
          select={(nominee) => setSelectedNominee(nominee)}
          category={category}
          nominees={nominees}
        />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write your name or choose from dropdown..'
            value={text}
            list='names'
            onChange={handleTextChange}
          />
          <datalist id='names'>
            <option value='Szilvi' />
            <option value='Szilveszter' />
          </datalist>
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default VoteForm;
