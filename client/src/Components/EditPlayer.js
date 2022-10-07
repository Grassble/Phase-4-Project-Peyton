import React, { useState } from "react";

function EditPlayer({players, positions, id, teams, name, image, position, team}) {

    const [editPositionId, setEditPositionId] = useState(position.id)
    const [editTeamId, setEditTeamId] = useState(team.id)
    const [editName, setEditName] = useState(name)
    const [editImage, setEditImage] = useState(image)
    const [editPosition, setEditPosition] = useState(position.name)
    const [editTeam, setEditTeam] = useState(team.name)

    const patchNewPlayer = (e) => {
        fetch(`http://localhost:4000/players/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                team_id: editTeamId,
                position_id: editPositionId,
                name: editName,
                image: editImage
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    return (
        <form onSubmit={patchNewPlayer}>
            <h1>Edit Player:</h1>
            <label>Name: </label><input type="text" name="name" placeholder={name} value={editName} onChange={(e) => setEditName(e.target.value)}/>
            <br></br><label>Image URL: </label><input type="text" name="name" placeholder={image} value={editImage} onChange={(e) => setEditImage(e.target.value)}/>
            <select id = "positionList" onChange={(e) => setEditPositionId(e.target.value)}>
                    <option>--Choose Position--</option>
                    {positions.map(position=><option value={position.id}>{position.name}</option>)}
                </select>
                <select id = "teamList" onChange={(e) => setEditTeamId(e.target.value)}>
                    <option>--Choose Team--</option>
                    {teams.map(team=><option value={team.id}>{team.name}</option>)}
                </select>
                <button type="submit">Edit Player</button>
        </form>
    )
}

export default EditPlayer