import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestInternat } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='internat' nominees={bestInternat} />
      <VoteList category='internat' />
    </>
  );
}

export default Actor;
