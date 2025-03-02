import VoteForm from '../components/VoteForm';
import VoteListDirector from '../components/VoteListDirector';
import { bestDirectors } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='director' nominees={bestDirectors} />
      <VoteListDirector />
    </>
  );
}

export default Actor;
