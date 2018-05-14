import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import './styles/App.css';

import LandingPage from './organisms/LandingPage/LandingPage';

class App extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.pathname === "/") {
            this.props.history.push("/home");
        }
        console.log(this.props.location.pathname);
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/home" component={LandingPage}/>
                </Switch>
            </div>
        );
    }
}

const AppWithRoute = withRouter(App);
export default AppWithRoute;
