import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestOriginal } from '../data/data';

function Original() {
  return (
    <>
      <VoteForm category='original' nominees={bestOriginal} />
      <VoteList category='original' />
    </>
  );
}

export default Original;
