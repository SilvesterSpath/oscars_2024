import VoteForm from '../components/VoteForm';
import VoteListSong from '../components/VoteListSong';
import { bestSong } from '../data/data';

function Song() {
  return (
    <>
      <VoteForm category='song' nominees={bestSong} />
      <VoteListSong />
    </>
  );
}

export default Song;
