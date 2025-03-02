import VoteForm from '../components/VoteForm';
import VoteListCinematography from '../components/VoteListCinematography';
import { bestCinematography } from '../data/data';

function Actor() {
  return (
    <>
      <VoteForm category='cinematography' nominees={bestCinematography} />
      <VoteListCinematography />
    </>
  );
}

export default Actor;
