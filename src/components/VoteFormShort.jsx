import { useState, useContext, useEffect } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import SelectShort from './SelectShort';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackFormActor() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisables] = useState(false);
  const [message, setMessage] = useState(
    'Select a nominant and send your vote'
  );
  const [short, setShort] = useState('');

  const { addItem, feedbackEditState, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEditState.edit) {
      setBtnDisables(false);
      setText(feedbackEditState.item.text);
      setShort(feedbackEditState.item.short);
    }
  }, [
    feedbackEditState.edit,
    feedbackEditState.item.text,
    feedbackEditState.item.short,
  ]);

  const handleTextChange = (e) => {
    console.log(text);
    if (text.length > 0) {
      setBtnDisables(false);
      setMessage(null);
    } else {
      setBtnDisables(false);
      setMessage('Select a nominant and send your vote');
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 1) {
      const newFeedback = {
        text,
        short,
      };
      if (feedbackEditState.edit) {
        updateFeedback(feedbackEditState.item.id, newFeedback);
      } else {
        addItem(newFeedback, 'short');
        setText('');
      }
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Oscar nominations for best short fim (live action):</h2>
        <SelectShort select={(short) => setShort(short)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write your name or choose from dropdown..'
            value={text}
            list='names'
            onChange={(e) => handleTextChange(e)}
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

export default FeedbackFormActor;
