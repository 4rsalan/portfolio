import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Transcript from './pages/Transcript';
import Capstone from './pages/Capstone';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const App = () => {
    return (
    <Router>
        <div>
            <NavBar/>
        </div>

        <Switch>
            <Route path="/portfolio">
                <Home/>
            </Route>
            <Route path="/transcript">
                <Transcript/>
            </Route>
            <Route path="/capstone">
                <Capstone/>
            </Route>
            <Route path="*">
                <Home/>
            </Route>
        </Switch>
    </Router>
  );
};


export default App;
