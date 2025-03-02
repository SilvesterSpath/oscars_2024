import VoteListMovie from '../components/VoteListMovie';
import VoteForm from '../components/VoteForm';
import { bestPicture } from '../data/data';

function Picture() {
  return (
    <>
      <VoteForm category={'movie'} nominees={bestPicture} />
      <VoteListMovie />
    </>
  );
}

export default Picture;
