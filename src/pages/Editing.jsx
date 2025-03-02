import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestEditing } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='editing' nominees={bestEditing} />
      <VoteList category='editing' />
    </>
  );
}

export default Actor;
