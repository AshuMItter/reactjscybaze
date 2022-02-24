import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './firstcomponent';
import SecondComponent from './secondcomponent';
import ThirstComponent from './thirdcomponent';

const Home = () => (

    <div>
        <h1>Welcome Home</h1>
    </div>
)

const About = () => (
    <div>
    <h1>Welcome home</h1>
    </div>
    )

class App extends React.Component{

    render()
       {
     return (
        <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'./firstcomponent'} className="nav-link"> Home </Link></li>
            <li><Link to={'./secondcomponent'} className="nav-link">Contact</Link></li>
            <li><Link to={'./thirdcomponent'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          </div>
        <Routes>
              <Route exact path="/">
                  
              </Route>
              
       </Routes>
      </Router>
        
           )
        
       }
}

export default App;