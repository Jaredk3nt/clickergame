import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Button from '../../atoms/Button/Button';

/* <LandingPage />
 * Props: 
 *   - 
 */
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: 'green'
        };
        // Set up timer for changeColor() that is reset if the user changes the color manually
    } 

    goToLogin = () => {
        this.props.history.push("/login");
    }

    changeColor = () => {
        if (this.state.currentColor === 'green') {
            this.setState({
                currentColor: 'blue'
            });
        } else if (this.state.currentColor === 'blue') {
            this.setState({
                currentColor: 'purple'
            });
        } else {
            this.setState({
                currentColor: 'green'
            });
        }
    }

    render() { 
        const classes = `landing-container ${this.state.currentColor}`
        return ( 
            <div className={classes}>
                <Link className="logo-title" to="/">Clickerga.me</Link>
                <div className="left-side">
                    <div className="split-title">
                        <div className="top-text">choose your</div>
                        <div className="bottom-text">TEAM!</div>
                    </div>
                    <div className="button-wrapper">
                        <Button text="Sign up now" clickAction={this.goToLogin} color={this.state.currentColor}/>
                    </div>
                    <div className="link-text">Already clicking? Log in here</div>
                </div>
                <div className="right-side">
                    <div className="colored-area">
                        <div className="button-wrapper">
                        <Button text={this.state.currentColor.toUpperCase()} clickAction={this.changeColor} color={this.state.currentColor} bigText={true}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default LandingPage;