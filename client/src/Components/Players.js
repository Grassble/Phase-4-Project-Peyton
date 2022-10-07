import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

function Players({positions, teams}) {

    let [players, setPlayers] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/players")
        .then(response => response.json())
        .then(data => setPlayers(data))
      }, [])

    return (
        <div>
            <h1 players={players} className="pageTitle">All Players</h1>
            {players.map(player => (<PlayerCard player={player} players={players} positions={positions} teams={teams} key={player.id}/>))}
        </div>
    )
}

export default Players