import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestAnimated } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='animated' nominees={bestAnimated} />
      <VoteList category='animated' />
    </>
  );
}

export default Actor;
