import VoteForm from '../components/VoteForm';
import VoteList from '../components/VoteList';
import { bestCinematography } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='cinematography' nominees={bestCinematography} />
      <VoteList category='cinematography' />
    </>
  );
}

export default Actor;
