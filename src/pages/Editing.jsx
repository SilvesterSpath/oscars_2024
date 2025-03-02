import VoteForm from '../components/VoteForm';
import VoteListEditing from '../components/VoteListEditing';
import { bestEditing } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='editing' nominees={bestEditing} />
      <VoteListEditing />
    </>
  );
}

export default Actor;
