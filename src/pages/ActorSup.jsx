import VoteListActorSup from '../components/VoteListActorSup';
import VoteForm from '../components/VoteForm';
import { bestActorsSup } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='actorSup' nominees={bestActorsSup} />
      <VoteListActorSup />
    </>
  );
}

export default Actor;
