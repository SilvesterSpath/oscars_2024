import VoteList from '../components/VoteList';
import VoteForm from '../components/VoteForm';
import { bestActorsSup } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='actor_sup' nominees={bestActorsSup} />
      <VoteList category='actor_sup' />
    </>
  );
}

export default Actor;
