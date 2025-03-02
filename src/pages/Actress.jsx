import VoteListActress from '../components/VoteListActress';
import VoteForm from '../components/VoteForm';
import { bestActress } from '../data/data';

function Actress() {
  return (
    <>
      <VoteForm category='actress' nominees={bestActress} />
      <VoteListActress />
    </>
  );
}

export default Actress;
