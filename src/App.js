import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SinglePlayer from './components/SinglePlayer.js'
import MultiPlayer from './components/MultiPlayer.js'
import Rules from './components/Rules.js'


class Home extends React.Component {

  render() {
    return (
      <div className="text-center">
        <h1 className="py-4">Welcome to Tail Chase!</h1>
        <h4>Please select an option above.</h4>
      </div>
    )
  }

}


function App() {

  return(
      <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 justify-content-center">
            <li className="nav-link"><Link to='/'>Home</Link></li>
            <li className="nav-link"><Link to='/rules'>Rules</Link></li>
            <li className="nav-link"><Link to='/singleplayer'>Single-Player</Link></li>
            <li className="nav-link"><Link to='/multiplayer'>Multi-Player</Link></li>
          </nav>
        <Route path='/' exact component={Home} />
        <Route path='/rules' exact component={Rules} />
        <Route path='/singleplayer' exact component={SinglePlayer} />
        <Route path='/multiplayer' exact component={MultiPlayer} />
      </Router>
  );
}

export default App;
