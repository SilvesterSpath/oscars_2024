import VoteList from '../components/VoteList';
import VoteForm from '../components/VoteForm';
import { bestActressSup } from '../data/data';

function ActressSup() {
  return (
    <>
      <VoteForm category='actress_sup' nominees={bestActressSup} />
      <VoteList category='actress_sup' />
    </>
  );
}

export default ActressSup;
