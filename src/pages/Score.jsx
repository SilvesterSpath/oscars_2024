import VoteForm from '../components/VoteForm';
import VoteListScore from '../components/VoteListScore';
import { bestScore } from '../data/data';

function Score() {
  return (
    <>
      <VoteForm category='score' nominees={bestScore} />
      <VoteListScore />
    </>
  );
}

export default Score;
