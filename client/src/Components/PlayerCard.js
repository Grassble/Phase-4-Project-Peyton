import React, { useState, useTransition } from "react";
import { Link } from "react-router-dom"
import EditPlayer from "./EditPlayer";

function PlayerCard ({players, positions, teams, player: {id, name, image, position, team}}) {

    const [newPositionId, setNewPositionId] = useState(position.id)
    const [newTeamId, setNewTeamId] = useState(team.id)
    const [newName, setNewName] = useState(name)
    const [newImage, setNewImage] = useState(image)
    const [newPosition, setNewPosition] = useState(position.name)
    const [newTeam, setNewTeam] = useState(team.name)

    const [toggleEdit, setToggleEdit] = useState(true)


    const deletePlayerCard = () => {
        fetch(`http://localhost:4000/players/${id}`, {
            method: "DELETE"
        })
    }

    const addFantasyPlayer = (e) => {
        // setNewImage(image)
        // setNewName(name)
        // setNewPositionId(position.id)
        // setNewTeamId(team.id)
        // setNewPosition(position.name)
        // setNewTeam(team.name)
        postFantasyPlayer(e)

    }

    // const carryInfo = (e) =>{
    //     setNewImage(image)
    //     setNewName(name)
    //     setNewPositionId(position.id)
    //     setNewTeamId(team.id)
    //     setNewPosition(position.name)
    //     setNewTeam(team.name)
    // }

    const postFantasyPlayer = (e) => {
        fetch(`http://localhost:4000/fantasies`, {
            method:"POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                team_id: newTeamId,
                position_id: newPositionId,
                name: newName,
                image: newImage,
                team: newTeam,
                position: newPosition
            })

        })
        .then(resp=>resp.json())
        .then(console.log)
        
    }

    const showEdit = () => {
        setToggleEdit(toggleEdit => !toggleEdit)
        console.log(toggleEdit)
    }

    return (
        <div className="playerCard">
            <button className="playerCardDelete" onClick={deletePlayerCard}><strong>X</strong></button ><button onClick={showEdit} className="playerCardEdit">Edit</button>
            <div>{toggleEdit ? (<img className="playerImage" src={image} alt="Player Image" />) : (<EditPlayer name={name} position={position} team={team} image={image} players={players} positions={positions} teams={teams} id={id}/>)}
            </div>
            <h2>{name}</h2>
            <h3>{position.name}</h3>
            <button type="click" onClick={addFantasyPlayer}>Add</button>
        </div>
    )
}

export default PlayerCard