import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Teams from "./Components/Teams";
import Players from "./Components/Players";
import PlayerForm from "./Components/PlayerForm";
import FantasyPlayers from "./Components/Fantasy";
import Login from "./Components/LoginStuff/Login";
import EditPlayer from "./Components/EditPlayer";

function App() {
  const [positions, setPositions] = useState([])
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])

  //Code for editing players
  const [editPositionId, setEditPositionId] = useState(0)
  const [editTeamId, setEditTeamId] = useState(0)
  const [editName, setEditName] = useState("")
  const [editImage, setEditImage] = useState("")
  const [editPosition, setEditPosition] = useState("")
  const [editTeam, setEditTeam] = useState("")

  const carryInfo = (e) =>{
    setEditImage(e.target.image)
    setEditName(e.target.name)
    setEditPositionId(e.target.position.id)
    setEditTeamId(e.target.team.id)
    setEditPosition(e.target.position.name)
    setEditTeam(e.target.team.name)
    console.log(editName)
}

  // Code for the login and logout
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);



  useEffect(() => {
    fetch("http://localhost:4000/positions")
    .then((r) => r.json())
    .then((data) => setPositions(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/teams")
    .then((r) => r.json())
    .then((data) => setTeams(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/players")
    .then((r) => r.json())
    .then((data) => setPlayers(data))
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav user={user} setUser={setUser}/>
        <Switch>
          <Route exact path="/">
            <Login user={user} setUser={setUser} onLogin={setUser}/>
          </Route>
          {/* <Route path="/hello">
            <h1>Page Count: {count} Players</h1>
          </Route> */}
          <Route exact path="/players">
            <Players positions={positions} teams={teams}/>
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route exact path="/form">
            <h1>Add a New Player</h1>
            <PlayerForm positions={positions} teams={teams} players={players}/>
          </Route>
          <Route exact path="/fantasy">
            <FantasyPlayers />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
