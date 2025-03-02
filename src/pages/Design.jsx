import VoteForm from '../components/VoteForm';
import VoteListDesign from '../components/VoteListDesign';
import { bestDesign } from '../data/data';

function Design() {
  return (
    <>
      <VoteForm category='design' nominees={bestDesign} />
      <VoteListDesign />
    </>
  );
}

export default Design;
