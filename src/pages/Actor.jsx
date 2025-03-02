import VoteList from '../components/VoteList';
import VoteForm from '../components/VoteForm';
import { bestActors } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='actors' nominees={bestActors} />
      <VoteList category='actors' />
    </>
  );
}

export default Actor;
