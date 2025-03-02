import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestCostume } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='costume' nominees={bestCostume} />
      <VoteList category='costume' />
    </>
  );
}

export default Actor;
