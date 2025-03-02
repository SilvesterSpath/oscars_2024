import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestDirectors } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='directors' nominees={bestDirectors} />
      <VoteList category='directors' />
    </>
  );
}

export default Actor;
