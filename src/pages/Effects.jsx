import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestEffects } from '../data/data';

function Effects() {
  return (
    <>
      <VoteForm category='effects' nominees={bestEffects} />
      <VoteList category='effects' />
    </>
  );
}

export default Effects;
