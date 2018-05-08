import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/App.css';

import LandingPage from './organisms/LandingPage/LandingPage';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
