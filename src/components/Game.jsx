import { useState } from "react";
import AddPlayer from "./AddPlayer";
import GameRoom from "./GameRoom";

const Game = () => {

    const [playerName, setPlayerName] = useState('');
    const [players, setPlayers] = useState([]);

    const newPlayer = ({ target }) => {
        setPlayerName(target.value);
    }

    const submitForm = (event) => {
        console.log("submit");
        event.preventDefault();
        console.log("HandleAdd");
        setPlayers(players => [...players, playerName]);
    }

    return (
        <>
            <AddPlayer newPlayer={newPlayer} submitHandler={submitForm} />
            <GameRoom players={players} />
        </>
    );
};

export default Game;