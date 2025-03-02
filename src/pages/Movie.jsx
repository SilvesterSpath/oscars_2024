import VoteList from '../components/VoteList';
import VoteForm from '../components/VoteForm';
import { bestPicture } from '../data/data';

function Picture() {
  return (
    <>
      <VoteForm category='movies' nominees={bestPicture} />
      <VoteList category='movies' />
    </>
  );
}

export default Picture;
