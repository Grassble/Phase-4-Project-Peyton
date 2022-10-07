import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

function Teams() {

    let [teams, setTeams] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/teams")
        .then(response => response.json())
        .then(data => setTeams(data))
      }, [])

    return (
        <div>
            <h1 className="pageTitle">NFL Teams</h1>
            {teams.map(team => (<TeamCard team={team} key={team.id} />))}
        </div>
    )
}

export default Teams