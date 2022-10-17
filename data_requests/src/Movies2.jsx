import { useEffect, useState } from 'react';
import axios from 'axios';


const FilmRequest = () => {
    const [request, setRequest] = useState("");
    const [film, setFilm] = useState("");
    //const APIKEY = process.env.APIKEY;
    const APIKEY = "2c54694"


    useEffect(() => {
        console.log("Loaded");
        const getFilm = async () => {
            try {
                const res = await axios.get("http://www.omdbapi.com/?apikey=" + APIKEY + "&t=" + request);
                console.log("Response:", res);
                setFilm(res.data);
            } catch (err) {
                console.error("Error")
            }
        }
        getFilm();
    }, [request]);

    if (film) {
        return (
            <>
                <label htmlFor="filmName">Name:</label>
                <input type="text" id="filmName" value={request} onChange={e => setRequest(e.target.value)} />
                <h3>{film.Title}</h3>
                <section>
                    <p><b>Actors:</b> {film.Actors}</p>
                    <p><b>Director:</b> {film.Director}</p>
                    <p><b>Rating:</b> {film.Rated}</p>
                    <p><b>Box Office:</b> {film.BoxOffice}</p>
                    <p><b>Runtime:</b> {film.Runtime}</p>
                    <p><b>Released:</b> {film.Year}</p>
                </section>
            </>
        );
    } else {
        return <p>Loading...</p>
    }
}

export default FilmRequest;
