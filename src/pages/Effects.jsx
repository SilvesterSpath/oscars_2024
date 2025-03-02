import VoteForm from '../components/VoteForm';
import VoteListEffects from '../components/VoteListEffects';
import { bestEffects } from '../data/data';

function Effects() {
  return (
    <>
      <VoteForm category='effects' nominees={bestEffects} />
      <VoteListEffects />
    </>
  );
}

export default Effects;
