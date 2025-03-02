import VoteForm from '../components/VoteForm';
import VoteListInternat from '../components/VoteListInternat';
import { bestInternat } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='internat' nominees={bestInternat} />
      <VoteListInternat />
    </>
  );
}

export default Actor;
