import VoteForm from '../components/VoteForm';
import VoteListShort from '../components/VoteListShort';
import { bestShort } from '../data/data';

function Short() {
  return (
    <>
      <VoteForm category='short' nominees={bestShort} />
      <VoteListShort />
    </>
  );
}

export default Short;
