import React from "react";

function TeamPlayerCard ({player: {name}}) {

    return (
        <div className="teamPlayerCard">
            <h1>{name}</h1>
        </div>
    )
}

export default TeamPlayerCard