import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav({ user, setUser }) {

  let history = useHistory()

    const navStyle = {
      color: 'white'
    }

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
      history.push('/')

    }

  
    return (
      <nav>
        <img src="https://static.nfl.com/static/content/public/static/img/fantasy/games/redesign/logo--league-fantasyfootballDark.png" alt='' className='logo'/>
        <ul className='nav-links'>
          <Link style={navStyle} to="/">
            <li>Home</li>
          </Link>
          {/* <Link style={navStyle} to='/hello'>
            <li>Count</li>
          </Link> */}
          <Link style={navStyle} to='/players'>
            <li>Players</li>
          </Link>
          <Link style={navStyle} to='/teams'>
            <li>NFL Teams</li>
          </Link>
          <Link style={navStyle} to='/form'>
            <li>Add Player</li>
          </Link>
          <Link style={navStyle} to='/fantasy'>
            <li>Fantasy Team</li>
          </Link>
        </ul>
        <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
      </nav>
    );
  }
  
  export default Nav;