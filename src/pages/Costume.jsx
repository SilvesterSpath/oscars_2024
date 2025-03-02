import VoteForm from '../components/VoteForm';
import VoteListCostume from '../components/VoteListCostume';
import { bestCostume } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='costume' nominees={bestCostume} />
      <VoteListCostume />
    </>
  );
}

export default Actor;
