import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestAdapted } from '../data/data';

function Adapted() {
  return (
    <>
      <VoteForm category='adapted' nominees={bestAdapted} />
      <VoteList category='adapted' />
    </>
  );
}

export default Adapted;
