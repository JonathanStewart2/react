import { useState } from 'react';
import axios from 'axios';


const FilmRequest = () => {
    const [request, setRequest] = useState("");
    const [film, setFilm] = useState("");
    //const APIKEY = process.env.APIKEY;
    const APIKEY = "2c54694"



    const getMovie = async () => {
        try {
            const url=("http://www.omdbapi.com/?apikey=" + APIKEY +"&t=" +request)
            const res = await axios.get(url);
            setFilm(res.data);
            console.log(film)
        } catch(err) {
            console.error("Error");
        }};
   

    const changeHandler = (e) => {
        setRequest(e.target.value);
        console.log(e.target.value);
    }

    return (
        <>
        <div>
            <h3>Film Search</h3>
            <input type="text" default="Film Title" value={request} onChange={changeHandler}/>
            <button onClick={()=>getMovie()}>Search</button>
        </div>
        </>
    )
}

export default FilmRequest;