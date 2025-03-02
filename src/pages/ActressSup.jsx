import VoteListActressSup from '../components/VoteListActressSup';
import VoteForm from '../components/VoteForm';
import { bestActressSup } from '../data/data';

function ActressSup() {
  return (
    <>
      <VoteForm category='actressSup' nominees={bestActressSup} />
      <VoteListActressSup />
    </>
  );
}

export default ActressSup;
