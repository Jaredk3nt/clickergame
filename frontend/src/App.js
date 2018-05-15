import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './styles/App.css';

import LandingPage from './organisms/LandingPage/LandingPage';
import Dashboard from './organisms/Dashboard/Dashboard';

class App extends Component {
    constructor(props) {
        super(props);
        // if (this.props.location.pathname === "/") {
        //     this.props.history.push("/home");
        // }
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/home" component={LandingPage}/>
                </Switch>
            </div>
        );
    }
}

const AppWithRoute = withRouter(App);
export default AppWithRoute;
