import VoteForm from '../components/VoteForm';
import VoteListAnimS from '../components/VoteListAnimS';
import { bestAnimS } from '../data/data';

function AnimS() {
  return (
    <>
      <VoteForm category='animS' nominees={bestAnimS} />
      <VoteListAnimS />
    </>
  );
}

export default AnimS;
