import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestDoc } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='doc' nominees={bestDoc} />
      <VoteList category='doc' />
    </>
  );
}

export default Actor;
