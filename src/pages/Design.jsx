import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestDesign } from '../data/data';

function Design() {
  return (
    <>
      <VoteForm category='design' nominees={bestDesign} />
      <VoteList category='design' />
    </>
  );
}

export default Design;
