import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestDocS } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='docs' nominees={bestDocS} />
      <VoteList category='docs' />
    </>
  );
}

export default Actor;
