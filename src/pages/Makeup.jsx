import VoteForm from '../components/VoteForm';
import VoteListMakeup from '../components/VoteListMakeup';
import { bestMakeup } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='makeup' nominees={bestMakeup} />
      <VoteListMakeup />
    </>
  );
}

export default Actor;
