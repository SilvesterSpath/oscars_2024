import VoteForm from '../components/VoteForm';
import VoteListDoc from '../components/VoteListDoc';
import { bestDoc } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='doc' nominees={bestDoc} />
      <VoteListDoc />
    </>
  );
}

export default Actor;
