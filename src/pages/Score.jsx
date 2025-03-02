import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestScore } from '../data/data';

function Score() {
  return (
    <>
      <VoteForm category='score' nominees={bestScore} />
      <VoteList category='score' />
    </>
  );
}

export default Score;
