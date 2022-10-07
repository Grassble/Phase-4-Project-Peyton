import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import FantasyPlayerCard from "./FantasyPlayerCard";

function FantasyPlayers() {

    let [fantasyPlayers, setFantasyPlayers] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/fantasies")
        .then(response => response.json())
        .then(data => setFantasyPlayers(data))
      }, [])

    return (
        <div>
            <h1 className="pageTitle">Fantasy Players</h1>
            {fantasyPlayers.map(player => (<FantasyPlayerCard player={player} key={player.id} />))}
        </div>
    )
}

export default FantasyPlayers