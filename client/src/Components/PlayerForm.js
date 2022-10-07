import React, { useState } from "react";
import EditPlayer from "./EditPlayer";

function PlayerForm({positions, teams, players}) {

    const [playerName, setPlayerName] = useState('')
    const [playerImage, setPlayerImage] = useState('')
    const [teamId, setTeamId] = useState()
    const [positionId, setPositionId] = useState()

    const handleNewPlayer = (e) => {
        e.preventDefault()
        fetch("http://localhost:4000/players", {
            method:"POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                team_id: teamId,
                position_id: positionId,
                name: playerName,
                image: playerImage
            })

        })
        .then(resp=>resp.json())
        .then(console.log)
    }

    const patchNewPlayer = (e) => {

    fetch(`http://localhost:4000/players/${players.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
        team_id: teamId,
        position_id: positionId,
        name: playerName,
        image: playerImage
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    }
    



    return (
        <div>
            <form onSubmit={handleNewPlayer}>
                <input type="text" name="name" placeholder="Player's Name" value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
                <input type="text" name="name" placeholder="Player's Image" value={playerImage} onChange={(e) => setPlayerImage(e.target.value)}/>
                <select id = "positionList" onChange={(e) => setPositionId(e.target.value)}>
                    <option>--Choose Position--</option>
                    {positions.map(position=><option value={position.id}>{position.name}</option>)}
                </select>
                <select id = "teamList" onChange={(e) => setTeamId(e.target.value)}>
                    <option>--Choose Team--</option>
                    {teams.map(team=><option value={team.id}>{team.name}</option>)}
                </select>
                <button type="submit">Add Player</button>
            </form>
        </div>
    )
    }

    export default PlayerForm