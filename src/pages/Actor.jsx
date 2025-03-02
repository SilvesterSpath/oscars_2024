import VoteListActor from '../components/VoteListActor';
import VoteForm from '../components/VoteForm';
import { bestActors } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='actor' nominees={bestActors} />
      <VoteListActor />
    </>
  );
}

export default Actor;
