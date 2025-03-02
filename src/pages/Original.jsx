import VoteForm from '../components/VoteForm';
import VoteListOriginal from '../components/VoteListOriginal';
import { bestOriginal } from '../data/data';

function Original() {
  return (
    <>
      <VoteForm category='original' nominees={bestOriginal} />
      <VoteListOriginal />
    </>
  );
}

export default Original;
