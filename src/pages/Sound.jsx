import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestSound } from '../data/data';

function Sound() {
  return (
    <>
      <VoteForm category='sound' nominees={bestSound} />
      <VoteList category='sound' />
    </>
  );
}

export default Sound;
