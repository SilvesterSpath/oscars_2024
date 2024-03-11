import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Movie from './pages/Movie';
import Actor from './pages/Actor';
import ActorSup from './pages/ActorSup';
import Actress from './pages/Actress';
import ActressSup from './pages/ActressSup';
import Director from './pages/Director';
import Animated from './pages/Animated';
import Cinematography from './pages/Cinematography';
import Costume from './pages/Costume';
import Documentary from './pages/Documentary';
import DocumentaryS from './pages/DocumentaryS';
import Editing from './pages/Editing';
import International from './pages/International';
import Makeup from './pages/Makeup';
import Score from './pages/Score';
import Song from './pages/Song';
import Design from './pages/Design';
import AnimS from './pages/AnimS';
import Short from './pages/Short';
import Sound from './pages/Sound';
import Effects from './pages/Effects';
import Adapted from './pages/Adapted';
import Original from './pages/Original';
import ScoreBoard from './score/ScoreBoard';
import AboutIconLink from './layouts/AboutIconLink';
import CategoryLinks from './layouts/CategoryLinks';
import Summary from './pages/Summary';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <CategoryLinks />
        <div className='container'>
          <Routes>
            <Route exact path='/movies' element={<Movie />} />
          </Routes>
          <Routes>
            <Route path='/actor' element={<Actor />} />
          </Routes>
          <Routes>
            <Route path='/actor_sup' element={<ActorSup />} />
          </Routes>
          <Routes>
            <Route path='/actress' element={<Actress />} />
          </Routes>
          <Routes>
            <Route path='/actress_sup' element={<ActressSup />} />
          </Routes>
          <Routes>
            <Route path='/director' element={<Director />} />
          </Routes>
          <Routes>
            <Route path='/animated' element={<Animated />} />
          </Routes>
          <Routes>
            <Route path='/cinematography' element={<Cinematography />} />
          </Routes>
          <Routes>
            <Route path='/costume' element={<Costume />} />
          </Routes>
          <Routes>
            <Route path='/docs' element={<DocumentaryS />} />
          </Routes>
          <Routes>
            <Route path='/doc' element={<Documentary />} />
          </Routes>
          <Routes>
            <Route path='/editing' element={<Editing />} />
          </Routes>
          <Routes>
            <Route path='/internat' element={<International />} />
          </Routes>
          <Routes>
            <Route path='/makeup' element={<Makeup />} />
          </Routes>
          <Routes>
            <Route path='/score' element={<Score />} />
          </Routes>
          <Routes>
            <Route path='/song' element={<Song />} />
          </Routes>
          <Routes>
            <Route path='/design' element={<Design />} />
          </Routes>
          <Routes>
            <Route path='/anims' element={<AnimS />} />
          </Routes>
          <Routes>
            <Route path='/short' element={<Short />} />
          </Routes>
          <Routes>
            <Route path='/sound' element={<Sound />} />
          </Routes>
          <Routes>
            <Route path='/effects' element={<Effects />} />
          </Routes>
          <Routes>
            <Route path='/adapted' element={<Adapted />} />
          </Routes>
          <Routes>
            <Route path='/original' element={<Original />} />
          </Routes>
          <Routes>
            <Route path='/summary' element={<Summary />} />
          </Routes>
          <ScoreBoard />
          <Routes>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
