import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestMakeup } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='makeup' nominees={bestMakeup} />
      <VoteList category='makeup' />
    </>
  );
}

export default Actor;
