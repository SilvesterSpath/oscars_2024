import VoteForm from '../components/VoteForm';
import VoteListDocS from '../components/VoteListDocS';
import { bestDocS } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='doc' nominees={bestDocS} />
      <VoteListDocS />
    </>
  );
}

export default Actor;
