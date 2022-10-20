import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Film from './Film';

function FilmDetails() {
  const { id } = useParams();
  const [film, setFilm] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`);
      setFilm(res.data);
    };
    getMovie();
  }, [id]);

  return film && <Film id={film.imdbId} title={film.Title} year={film.Year} poster={film.Poster} />;
}

export default FilmDetails;
