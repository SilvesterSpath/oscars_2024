import VoteForm from '../components/VoteForm';
import VoteListAdapted from '../components/VoteListAdapted';
import { bestAdapted } from '../data/data';

function Adapted() {
  return (
    <>
      <VoteForm category='adapted' nominees={bestAdapted} />
      <VoteListAdapted />
    </>
  );
}

export default Adapted;
