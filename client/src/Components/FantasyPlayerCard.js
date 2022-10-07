import React, { useState } from "react"

function FantasyPlayerCard ({player: {id, name, image, position, team}}) {

    const [touchdownThrown, setTouchdownThrown] = useState(0)
    const [touchdownRun, setTouchdownRun] = useState(0)
    const [yardsGained, setYardsGained] = useState(0)
    const [yardsThrown, setYardsThrown] = useState(0)
    const [receptions, setReceptions] = useState(0)

    const deleteFantasyPlayerCard = () => {
        fetch(`http://localhost:4000/fantasies/${id}`, {
            method: "DELETE"
        })
    }
    
    let pointsOne = touchdownThrown * 4
    let pointsTwo = touchdownRun * 6
    let pointsThree = yardsGained * .1
    let pointsFour = yardsThrown/25
    let pointsFive = receptions * 1
    let totalPoints = pointsOne + pointsTwo + pointsThree + pointsFour + pointsFive


   
    

    return (
        <div className="fantasyCard">
            <button className="fantasyCardDelete" onClick={deleteFantasyPlayerCard}><strong>X</strong></button>
            <h2 className="fantasyName">{name}</h2>
            <img className="fantasyImage" src={image} alt="Player Image" />
            <label className="fantasyLabel">
                {/* <h3>{position}</h3> */}
                {/* <h4>{team}</h4> */}
            </label>
            <form className="fantasyForm">
                <label>Touchdowns Thrown</label>  <input type="text" name="name" placeholder="Touchdown's Thrown" value={touchdownThrown} onChange={(e) => setTouchdownThrown(e.target.value)}/>
                <br/><label>Touchdowns</label>  <input type="text" name="name" placeholder="Touchdown" value={touchdownRun} onChange={(e) => setTouchdownRun(e.target.value)}/>
                <br/><label>Yards</label>  <input type="text" name="name" placeholder="Yards Gained" value={yardsGained} onChange={(e) => setYardsGained(e.target.value)}/>
                <br/><label>Yards Thrown</label>  <input type="text" name="name" placeholder="Yards Thrown" value={yardsThrown} onChange={(e) => setYardsThrown(e.target.value)}/>
                <br/><label>Receptions</label>  <input type="text" name="name" placeholder="Touchdown's Thrown" value={receptions} onChange={(e) => setReceptions(e.target.value)}/>
                <br/><label>Total: {totalPoints} </label>
            </form>
        </div>
    )
}

export default FantasyPlayerCard