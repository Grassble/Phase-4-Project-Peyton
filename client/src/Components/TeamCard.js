import React from "react";
import TeamPlayerCard from "./TeamPlayerCard";

function TeamCard ({team: {name, logo, players}}) {

    return (
        <div className="teamCard">
            <img className="logoImage" src={logo} alt="Team Image"/>
            <h2>{name}</h2>
            {players.map(player => (<TeamPlayerCard player={player} key={player.id} />))}
        </div>
    )
}

export default TeamCard