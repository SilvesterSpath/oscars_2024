import VoteList from '../components/VoteList';
import VoteForm from '../components/VoteForm';
import { bestActress } from '../data/data';

function Actress() {
  return (
    <>
      <VoteForm category='actress' nominees={bestActress} />
      <VoteList category='actress' />
    </>
  );
}

export default Actress;
