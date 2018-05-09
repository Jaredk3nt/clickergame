import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import './styles/App.css';

import LandingPage from './organisms/LandingPage/LandingPage';

class App extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location);
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                </Switch>
            </div>
        );
    }
}

const AppWithRoute = withRouter(App);
export default AppWithRoute;
