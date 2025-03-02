import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestShort } from '../data/data';

function Short() {
  return (
    <>
      <VoteForm category='short' nominees={bestShort} />
      <VoteList category='short' />
    </>
  );
}

export default Short;
