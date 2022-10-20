import { useState } from 'react';
import AddGamers from './AddGamers.jsx';
import GameRoom from './GameRoom.jsx';

const Game = () => {
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);

    const newPlayer = ({target}) => {
        setPlayerName(target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
    }

    const handleAdd = () => {
        setPlayers( players => [...players, playerName]);
    }

    return (
        <>
        <AddGamers newPlayer={newPlayer} submitHandler={submitForm} handleAdd={handleAdd}/>
        <GameRoom players={players}/>
        </>
    )
}

export default Game;