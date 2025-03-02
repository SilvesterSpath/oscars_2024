import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestSong } from '../data/data';

function Song() {
  return (
    <>
      <VoteForm category='song' nominees={bestSong} />
      <VoteList category='song' />
    </>
  );
}

export default Song;
