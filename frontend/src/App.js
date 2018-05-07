import React, { Component } from 'react';
import './styles/App.css';

import LandingPage from './organisms/LandingPage/LandingPage';

class App extends Component {

    render() {
        return (
            <div className="App">
                <LandingPage/>
            </div>
        );
    }
}

export default App;
