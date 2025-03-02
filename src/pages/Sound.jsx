import VoteForm from '../components/VoteForm';
import VoteListSound from '../components/VoteListSound';
import { bestSound } from '../data/data';

function Sound() {
  return (
    <>
      <VoteForm category='sound' nominees={bestSound} />
      <VoteListSound />
    </>
  );
}

export default Sound;
