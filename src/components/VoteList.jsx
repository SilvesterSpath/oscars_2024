import VoteItem from './VoteItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { v4 as uuidv4 } from 'uuid';

function VoteList({ category }) {
  const contextData = useContext(FeedbackContext);
  console.log('category', category);
  console.log('contextData', contextData);
  const votes = contextData[`${category}`];
  console.log('votes', votes);

  if (!votes || votes.length === 1) {
    return <p>No Vote Yet</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {votes.slice(1).map((item, idx) => (
          <motion.div
            key={uuidv4()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <VoteItem key={idx} item={item} type={category} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default VoteList;
