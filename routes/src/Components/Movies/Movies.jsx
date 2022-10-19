import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Film from './Film';

function Movies() {
  const [request, setRequest] = useState('');
  const [films, setFilms] = useState([]);

  const getMovie = async () => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${request}`);
      setFilms(res.data.Search);
    } catch (err) {
      console.error('Error');
    }
  };

  const changeHandler = (e) => {
    setRequest(e.target.value);
  };

  if (films) {
    return (
      <>
        <h3>Film Search</h3>
        <input type="text" default="Film Title" value={request} onChange={changeHandler} />
        <button type="button" onClick={() => getMovie()}>Search</button>
        {
            films.map((film) => (
              <>
                <Film
                  id={film.imdbID}
                  title={film.Title}
                  year={film.Year}
                  poster={film.Poster}
                />
                <Link to={`./${film.imdbID}`}><button type="button">Details</button></Link>
              </>
            ))
        }
      </>
    );
  }
  return (
    <>
      <p>Error, please try again!</p>
      <h3>Film Search</h3>
      <input type="text" default="Film Title" value={request} onChange={changeHandler} />
      <button type="button" onClick={() => getMovie()}>Search</button>
    </>
  );
}

export default Movies;

Film.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
