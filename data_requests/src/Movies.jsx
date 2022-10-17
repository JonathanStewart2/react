import { useState } from 'react';
import axios from 'axios';


const FilmRequest = () => {
    const [request, setRequest] = useState("");
    const [film, setFilm] = useState([]);
    //const APIKEY = process.env.APIKEY;
    const APIKEY = "2c54694"



    const getMovie = async () => {
        try {
            const url=("http://www.omdbapi.com/?apikey=" + APIKEY +"&s=" +request)
            const res = await axios.get(url);
            setFilm(res.data.Search);
            console.log(film)
        } catch(err) {
            console.error("Error");
        }};
   

    const changeHandler = (e) => {
        setRequest(e.target.value);
        console.log(e.target.value);
    }

    if (film) {
        return ( 
            <>
             <h3>Film Search</h3>
             <input type="text" default="Film Title" value={request} onChange={changeHandler}/>
             <button onClick={()=>getMovie()}>Search</button>
               <table>
              { film.map((film => {
                  return (
                <tr>
                    <td>{film.Poster}</td>
                    <td>{film.Title}</td>
                    <td><b>Year:</b> {film.Year}</td>
               </tr>
                  )
              }))
                }
                 </table>
            </>
        );
    } else {
        return (
             <>
                <p>Error, please try again!</p>
                <h3>Film Search</h3>
                <input type="text" default="Film Title" value={request} onChange={changeHandler}/>
                <button onClick={()=>getMovie()}>Search</button>
            </> )
    }
}

//Film.map(film => <Film title={film.Title} year={film.Year} />


export default FilmRequest;