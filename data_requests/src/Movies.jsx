import { useState } from 'react';
import axios from 'axios';
import Film from './Film.jsx';

const FilmRequest = () => {
    const [request, setRequest] = useState('');
    const [film, setFilm] = useState([]);
    const APIKEY = process.env.REACT_APP_API_KEY;
   // const APIKEY = "2c54694"

    const getMovie = async () => {
        try {
            const url = ("http://www.omdbapi.com/?apikey=" + APIKEY + "&s=" + request)
            console.log("API KEY CHECK:", url);
            const res = await axios.get(url);
            setFilm(res.data.Search);
            console.log(film)
        } catch (err) {
            console.error("Error");
        }
    };


    const changeHandler = (e) => {
        setRequest(e.target.value);
        console.log(e.target.value);
    }

    if (film) {
        return (
            <>
                <h3>Film Search</h3>
                <input type="text" default="Film Title" value={request} onChange={changeHandler} />
                <button onClick={() => getMovie()}>Search</button>
                
                {
        film.map((film) => (
          <Film
            key={film.imdbID}
            title={film.Title}
            year={film.Year}
            poster={film.Poster}
          />
        ))
      }
            </>
        );
    } else {
        return (
            <>
                <p>Error, please try again!</p>
                <h3>Film Search</h3>
                <input type="text" default="Film Title" value={request} onChange={changeHandler} />
                <button onClick={() => getMovie()}>Search</button>
            </>)
    }
};

//Film.map(film => <Film title={film.Title} year={film.Year} />


export default FilmRequest;



//propTypes
// Film.propTypes = {
//     title: PropTypes.string.isRequired,
//     year: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
// }