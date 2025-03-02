import VoteForm from '../components/VoteForm';
import VoteListAnimated from '../components/VoteListAnimated';
import { bestAnimated } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='animated' nominees={bestAnimated} />
      <VoteListAnimated />
    </>
  );
}

export default Actor;
