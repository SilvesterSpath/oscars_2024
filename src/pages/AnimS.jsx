import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestAnimS } from '../data/data';

function AnimS() {
  return (
    <>
      <VoteForm category='anims' nominees={bestAnimS} />
      <VoteList category='anims' />
    </>
  );
}

export default AnimS;
