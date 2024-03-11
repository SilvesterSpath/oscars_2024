import VoteItem from './VoteItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { v4 as uuidv4 } from 'uuid';

function VoteListDirector() {
  const { movies } = useContext(FeedbackContext);
  const { actors } = useContext(FeedbackContext);
  const { actor_sup } = useContext(FeedbackContext);
  const { actress } = useContext(FeedbackContext);
  const { actress_sup } = useContext(FeedbackContext);
  const { directors } = useContext(FeedbackContext);
  const { animated } = useContext(FeedbackContext);
  const { cinematography } = useContext(FeedbackContext);
  const { costume } = useContext(FeedbackContext);
  const { doc } = useContext(FeedbackContext);
  const { docs } = useContext(FeedbackContext);
  const { editing } = useContext(FeedbackContext);
  const { internat } = useContext(FeedbackContext);
  const { makeup } = useContext(FeedbackContext);
  const { score } = useContext(FeedbackContext);
  const { song } = useContext(FeedbackContext);
  const { design } = useContext(FeedbackContext);
  const { anims } = useContext(FeedbackContext);
  const { short } = useContext(FeedbackContext);
  const { effects } = useContext(FeedbackContext);
  const { adapted } = useContext(FeedbackContext);
  const { original } = useContext(FeedbackContext);
  const { sound } = useContext(FeedbackContext);

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {movies &&
          movies.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'movies'} />
            </motion.div>
          ))}
        {sound &&
          sound.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'sound'} />
            </motion.div>
          ))}
        {actors &&
          actors.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'actors'} />
            </motion.div>
          ))}
        {actor_sup &&
          actor_sup.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'actor_sup'} />
            </motion.div>
          ))}
        {actress &&
          actress.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'actress'} />
            </motion.div>
          ))}
        {actress_sup &&
          actress_sup.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'actress_sup'} />
            </motion.div>
          ))}
        {directors &&
          directors.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'directors'} />
            </motion.div>
          ))}
        {animated &&
          animated.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'animated'} />
            </motion.div>
          ))}
        {cinematography &&
          cinematography.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'cinematography'} />
            </motion.div>
          ))}
        {costume &&
          costume.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'costume'} />
            </motion.div>
          ))}
        {doc &&
          doc.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'doc'} />
            </motion.div>
          ))}
        {docs &&
          docs.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'docs'} />
            </motion.div>
          ))}
        {editing &&
          editing.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'editing'} />
            </motion.div>
          ))}
        {internat &&
          internat.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'internat'} />
            </motion.div>
          ))}
        {makeup &&
          makeup.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'makeup'} />
            </motion.div>
          ))}
        {score &&
          score.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'score'} />
            </motion.div>
          ))}
        {song &&
          song.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'song'} />
            </motion.div>
          ))}
        {design &&
          design.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'design'} />
            </motion.div>
          ))}
        {anims &&
          anims.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'anims'} />
            </motion.div>
          ))}
        {short &&
          short.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'short'} />
            </motion.div>
          ))}
        {sound &&
          sound.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'sound'} />
            </motion.div>
          ))}
        {effects &&
          effects.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'effects'} />
            </motion.div>
          ))}
        {adapted &&
          adapted.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'adapted'} />
            </motion.div>
          ))}
        {original &&
          original.slice(1).map((item, idx) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VoteItem key={idx} item={item} type={'original'} />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}

export default VoteListDirector;
