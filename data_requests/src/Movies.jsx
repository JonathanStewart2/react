import { useState } from 'react';
import axios from 'axios';
const APIKEY = process.env.APIKEY
const url=(`http://www.omdbapi.com/?apikey=[${APIKEY}]`)


const FilmRequest = () => {
    const [request, setRequest] = useState("");
    const [film, setFilm] = useState("");

    // useEffect(() => {
    //     const getMovie = async () => {
    //         try {
    //             const res = await axios.get(url);
    //             console.log(res);
    //             setFilm(res);
    //         } catch(err) {
    //             console.error("Error");
    //         }
    //     getMovie()
    //     }
    // }, [film]);
    const getMovie = async () => {
        try {
            const res = await axios.get(url);
            console.log(res);
            setFilm(res);
        } catch(err) {
            console.error("Error");
        }}
   

    const changeHandler = (e) => {
        setRequest(e.value);
    }

    return (
        <>
        <div>
            <h3>Film Search</h3>
            <input type="text" default="Film Title" value={request} onChange={changeHandler}/>
            <button onClick={()=>getMovie()}>Search</button>
        </div>
        <div>
            {film}
        </div>

        </>
    )
}

export default FilmRequest;