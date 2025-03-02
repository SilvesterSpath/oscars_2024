import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [movies, setMovies] = useState(() => {
    // Get movies from localStorage or use default value
    const storedMovies = localStorage.getItem('movies');
    return storedMovies
      ? JSON.parse(storedMovies)
      : [
          {
            id: 1,
            text: 'Example name',
            movie: 'Example movie',
          },
        ];
  });

  const [actors, setActors] = useState(() => {
    const storedActors = localStorage.getItem('actors');
    return storedActors
      ? JSON.parse(storedActors)
      : [
          {
            id: 1,
            text: 'Example name',
            actors: 'Example actor',
          },
        ];
  });

  const [actor_sup, setActorSup] = useState(() => {
    const storedActorSup = localStorage.getItem('actor_sup');
    return storedActorSup
      ? JSON.parse(storedActorSup)
      : [
          {
            id: 1,
            text: 'Example name',
            actor_sup: 'Example actor sup',
          },
        ];
  });

  const [actress, setActress] = useState(() => {
    const storedActress = localStorage.getItem('actress');
    return storedActress
      ? JSON.parse(storedActress)
      : [
          {
            id: 1,
            text: 'Example name',
            actress: 'Example actress',
          },
        ];
  });

  const [doc, setDoc] = useState(() => {
    const storedDoc = localStorage.getItem('doc');
    return storedDoc
      ? JSON.parse(storedDoc)
      : [
          {
            id: 1,
            text: 'Example name',
            doc: 'Example docum',
          },
        ];
  });

  const [docs, setDocS] = useState(() => {
    const storedDocs = localStorage.getItem('docs');
    return storedDocs
      ? JSON.parse(storedDocs)
      : [
          {
            id: 1,
            text: 'Example name',
            docs: 'Example docum short',
          },
        ];
  });

  const [actress_sup, setActressSup] = useState(() => {
    const storedActressSup = localStorage.getItem('actress_sup');
    return storedActressSup
      ? JSON.parse(storedActressSup)
      : [
          {
            id: 1,
            text: 'Example name',
            actress_sup: 'Example actress sup',
          },
        ];
  });

  const [directors, setDirectors] = useState(() => {
    const storedDirectors = localStorage.getItem('directors');
    return storedDirectors
      ? JSON.parse(storedDirectors)
      : [
          {
            id: 1,
            text: 'Example name',
            directors: 'Example directors',
          },
        ];
  });

  const [cinematography, setCinematography] = useState(() => {
    const storedCinematography = localStorage.getItem('cinematography');
    return storedCinematography
      ? JSON.parse(storedCinematography)
      : [
          {
            id: 1,
            text: 'Example name',
            cinematography: 'Example cinematography',
          },
        ];
  });

  const [animated, setAnimated] = useState(() => {
    const storedAnimated = localStorage.getItem('animated');
    return storedAnimated
      ? JSON.parse(storedAnimated)
      : [
          {
            id: 1,
            text: 'Example name',
            animated: 'Example animated',
          },
        ];
  });

  const [costume, setCostume] = useState(() => {
    const storedcostume = localStorage.getItem('costume');
    return storedcostume
      ? JSON.parse(storedcostume)
      : [
          {
            id: 1,
            text: 'Example name',
            costume: 'Example costume',
          },
        ];
  });

  const [editing, setEditing] = useState(() => {
    const storedediting = localStorage.getItem('editing');
    return storedediting
      ? JSON.parse(storedediting)
      : [
          {
            id: 1,
            text: 'Example name',
            editing: 'Example editing',
          },
        ];
  });

  const [makeup, setMakeup] = useState(() => {
    const storedmakeup = localStorage.getItem('makeup');
    return storedmakeup
      ? JSON.parse(storedmakeup)
      : [
          {
            id: 1,
            text: 'Example name',
            makeup: 'Example makeup',
          },
        ];
  });

  const [internat, setInternat] = useState(() => {
    const storedinternat = localStorage.getItem('internat');
    return storedinternat
      ? JSON.parse(storedinternat)
      : [
          {
            id: 1,
            text: 'Example name',
            internat: 'Example internat',
          },
        ];
  });

  const [score, setScore] = useState(() => {
    const storedscore = localStorage.getItem('score');
    return storedscore
      ? JSON.parse(storedscore)
      : [
          {
            id: 1,
            text: 'Example name',
            score: 'Example score',
          },
        ];
  });

  const [design, setDesign] = useState(() => {
    const storeddesign = localStorage.getItem('design');
    return storeddesign
      ? JSON.parse(storeddesign)
      : [
          {
            id: 1,
            text: 'Example name',
            design: 'Example design',
          },
        ];
  });

  const [anims, setAnims] = useState(() => {
    const storedanims = localStorage.getItem('anims');
    return storedanims
      ? JSON.parse(storedanims)
      : [
          {
            id: 1,
            text: 'Example name',
            anims: 'Example anims',
          },
        ];
  });

  const [short, setShort] = useState(() => {
    const storedshort = localStorage.getItem('short');
    return storedshort
      ? JSON.parse(storedshort)
      : [
          {
            id: 1,
            text: 'Example name',
            short: 'Example short',
          },
        ];
  });

  const [sound, setSound] = useState(() => {
    const storedsound = localStorage.getItem('sound');
    return storedsound
      ? JSON.parse(storedsound)
      : [
          {
            id: 1,
            text: 'Example name',
            sound: 'Example sound',
          },
        ];
  });

  const [effects, setEffects] = useState(() => {
    const storedeffects = localStorage.getItem('effects');
    return storedeffects
      ? JSON.parse(storedeffects)
      : [
          {
            id: 1,
            text: 'Example name',
            effects: 'Example effects',
          },
        ];
  });

  const [adapted, setAdapted] = useState(() => {
    const storedadapted = localStorage.getItem('adapted');
    return storedadapted
      ? JSON.parse(storedadapted)
      : [
          {
            id: 1,
            text: 'Example name',
            adapted: 'Example adapted',
          },
        ];
  });

  const [original, setOriginal] = useState(() => {
    const storedoriginal = localStorage.getItem('original');
    return storedoriginal
      ? JSON.parse(storedoriginal)
      : [
          {
            id: 1,
            text: 'Example name',
            original: 'Example original',
          },
        ];
  });

  const [song, setSong] = useState(() => {
    const storedsong = localStorage.getItem('song');
    return storedsong
      ? JSON.parse(storedsong)
      : [
          {
            id: 1,
            text: 'Example name',
            song: 'Example song',
          },
        ];
  });

  const [scores, setScores] = useState(() => {
    const storedscores = localStorage.getItem('scores');
    console.log('storedScores', storedscores);
    return storedscores
      ? JSON.parse(storedscores)
      : [
          {
            id: 1,
            name: 'Szilveszter',
            score: 0,
          },
          {
            id: 2,
            name: 'Szilvi',
            score: 0,
          },
        ];
  });

  useEffect(() => {
    // Save state variables to localStorage every time they change
    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('actors', JSON.stringify(actors));
    localStorage.setItem('actor_sup', JSON.stringify(actor_sup));
    localStorage.setItem('actress', JSON.stringify(actress));
    localStorage.setItem('doc', JSON.stringify(doc));
    localStorage.setItem('docs', JSON.stringify(docs));
    localStorage.setItem('actress_sup', JSON.stringify(actress_sup));
    localStorage.setItem('directors', JSON.stringify(directors));
    localStorage.setItem('cinematography', JSON.stringify(cinematography));
    localStorage.setItem('animated', JSON.stringify(animated));
    localStorage.setItem('costume', JSON.stringify(costume));
    localStorage.setItem('editing', JSON.stringify(editing));
    localStorage.setItem('makeup', JSON.stringify(makeup));
    localStorage.setItem('internat', JSON.stringify(internat));
    localStorage.setItem('score', JSON.stringify(score));
    localStorage.setItem('design', JSON.stringify(design));
    localStorage.setItem('anims', JSON.stringify(anims));
    localStorage.setItem('short', JSON.stringify(short));
    localStorage.setItem('sound', JSON.stringify(sound));
    localStorage.setItem('effects', JSON.stringify(effects));
    localStorage.setItem('adapted', JSON.stringify(adapted));
    localStorage.setItem('original', JSON.stringify(original));
    localStorage.setItem('song', JSON.stringify(song));
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [
    movies,
    actors,
    actor_sup,
    actress,
    doc,
    docs,
    actress_sup,
    directors,
    cinematography,
    animated,
    costume,
    editing,
    makeup,
    internat,
    score,
    design,
    anims,
    short,
    sound,
    effects,
    adapted,
    original,
    song,
    scores,
  ]);

  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit: false,
  });

  // Delete item
  const deleteItem = (id, type) => {
    if (window.confirm('Are you sure you want to delete')) {
      if (type === 'movies') setMovies(movies.filter((item) => item.id !== id));
      if (type === 'actors') setActors(actors.filter((item) => item.id !== id));
      if (type === 'directors')
        setDirectors(directors.filter((item) => item.id !== id));
      if (type === 'actress')
        setActress(actress.filter((item) => item.id !== id));
      if (type === 'actress_sup')
        setActressSup(actress_sup.filter((item) => item.id !== id));
      if (type === 'animated')
        setAnimated(animated.filter((item) => item.id !== id));
      if (type === 'actor_sup')
        setActorSup(actor_sup.filter((item) => item.id !== id));
      if (type === 'cinematography')
        setCinematography(cinematography.filter((item) => item.id !== id));
      if (type === 'costume')
        setCostume(costume.filter((item) => item.id !== id));
      if (type === 'doc') setDoc(doc.filter((item) => item.id !== id));
      if (type === 'docs') setDocS(docs.filter((item) => item.id !== id));
      if (type === 'editing')
        setEditing(editing.filter((item) => item.id !== id));
      if (type === 'internat')
        setInternat(internat.filter((item) => item.id !== id));
      if (type === 'makeup') setMakeup(makeup.filter((item) => item.id !== id));
      if (type === 'score') setScore(score.filter((item) => item.id !== id));
      if (type === 'song') setSong(song.filter((item) => item.id !== id));
      if (type === 'design') setDesign(design.filter((item) => item.id !== id));
      if (type === 'anims') setAnims(anims.filter((item) => item.id !== id));
      if (type === 'short') setShort(short.filter((item) => item.id !== id));
      if (type === 'sound') setSound(sound.filter((item) => item.id !== id));
      if (type === 'effects')
        setEffects(effects.filter((item) => item.id !== id));
      if (type === 'adapted')
        setAdapted(adapted.filter((item) => item.id !== id));
      if (type === 'original')
        setOriginal(original.filter((item) => item.id !== id));
    }
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEditState({
      item,
      edit: true,
    });
  };

  // Add a movie
  const addItem = (newFeedback, type) => {
    if (isNaN(newFeedback.id)) {
      newFeedback.id = uuidv4();
    }
    if (type === 'movies') setMovies([...movies, newFeedback]);
    if (type === 'actors') setActors([...actors, newFeedback]);
    if (type === 'actor_sup') setActorSup([...actor_sup, newFeedback]);
    if (type === 'actress') setActress([...actress, newFeedback]);
    if (type === 'actress_sup') setActressSup([...actress_sup, newFeedback]);
    if (type === 'directors') setDirectors([...directors, newFeedback]);
    if (type === 'animated') setAnimated([...animated, newFeedback]);
    if (type === 'cinematography')
      setCinematography([...cinematography, newFeedback]);
    if (type === 'costume') setCostume([...costume, newFeedback]);
    if (type === 'doc') setDoc([...doc, newFeedback]);
    if (type === 'docs') setDocS([...docs, newFeedback]);
    if (type === 'editing') setEditing([...editing, newFeedback]);
    if (type === 'internat') setInternat([...internat, newFeedback]);
    if (type === 'makeup') setMakeup([...makeup, newFeedback]);
    if (type === 'score') setScore([...score, newFeedback]);
    if (type === 'song') setSong([...song, newFeedback]);
    if (type === 'design') setDesign([...design, newFeedback]);
    if (type === 'anims') setAnims([...anims, newFeedback]);
    if (type === 'short') setShort([...short, newFeedback]);
    if (type === 'sound') setSound([...sound, newFeedback]);
    if (type === 'effects') setEffects([...effects, newFeedback]);
    if (type === 'adapted') setAdapted([...adapted, newFeedback]);
    if (type === 'original') setOriginal([...original, newFeedback]);
    if (type === 'scores') {
      scores.find((item) => item.name === newFeedback.name).score =
        newFeedback.score;
      setScores([...scores]);
    }
  };

  // Update feedback item
  const updateFeedback = (id, feedbackItem) => {
    setMovies(
      movies.map((item) =>
        item.id === id ? { ...item, ...feedbackItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        movies,
        actors,
        actress,
        actress_sup,
        directors,
        animated,
        actor_sup,
        cinematography,
        costume,
        doc,
        docs,
        editing,
        internat,
        makeup,
        score,
        song,
        design,
        anims,
        short,
        sound,
        effects,
        adapted,
        original,
        scores,
        deleteItem,
        addItem,
        editFeedback,
        feedbackEditState,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
