import React, { Component } from 'react';
import './styles.css';

import Button from '../../atoms/Button/Button';
import FormInput from '../../atoms/FormInput/FormInput';
import GradientPane from '../../atoms/GradientPane/GradientPane';
import RadioInput from '../../atoms/RadioInput/RadioInput';

/* <LandingPage />
 * Props: 
 *   - 
 */
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            passwordChecked: false,
            team: undefined,
            teamId: undefined,
            buttonList: [
                { color:'green', text:'Green', id: 1 },
                { color:'blue', text:'Blue', id: 2 },
                { color:'purple', text:'Purple', id: 3 }
            ]
        };
    }

    updateEmail = (value) => {
        this.setState({
            email: value
        });
    }

    validateEmail = () => {
        if (this.state.email.length > 0) {
            const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|edu|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
            return re.test(this.state.email);
        } else {
            return undefined;
        }
    }

    updateUsername = (value) => {
        this.setState({
            username: value
        });
    }

    updatePassword = (value) => {
        this.setState({
            password: value
        });
    }

    checkPassword = (value) => {
        if (this.state.password.length > 0 && value === this.state.password) {
            this.setState({
                passwordChecked: true
            });
        } else {
            this.setState({
                passwordChecked: false
            });
        }
    }

    readyToSubmit = () => {
        if (this.state.email.length > 0 && this.state.username.length > 0 && this.state.passwordChecked && this.state.team !== undefined) {
            console.log("true");
            return false;
        } else {
            console.log("false");
            return false;
        }
    }

    radioAction = (buttonId) => {
        let team = undefined;
        for (let t of this.state.buttonList) {
            if (t.id === buttonId) {
                team = t;
            }
        }
        this.setState({
            team: team.color,
            teamId: buttonId
        });
    }

    clickAction = () => {
        console.log(this.state);
    }

    render() { 
        return ( 
            <div className="landing-container">
                <div className="left-side">
                    <div className="split-title">
                        <div className="top-text">create your </div>
                        <div className="bottom-text">ACCOUNT</div>
                    </div>
                    <div className="input-wrapper"><FormInput placeholder="Email" valueChange={this.updateEmail} success={this.validateEmail()}/></div>
                    <div className="input-wrapper"><FormInput placeholder="Username" valueChange={this.updateUsername}/></div>
                    <div className="input-wrapper"><FormInput placeholder="Password" valueChange={this.updatePassword}/></div>
                    <div className="input-wrapper"><FormInput placeholder="Re-type Password" valueChange={this.checkPassword}/></div>
                    <div className="text-wrapper"><h3>choose your team:</h3></div>
                    <div className="radio-wrapper"><RadioInput buttons={this.state.buttonList} clickAction={this.radioAction} initialSelect={this.state.teamId}/></div>
                    <div className="button-wrapper">
                        <Button text="Start clicking!" disabled={false} clickAction={this.clickAction} clickedDown={this.state.clicked}/>
                    </div>
                </div>
                <div className="right-side">
                    <GradientPane/>
                </div>
            </div>
        )
    }
}
 
export default LandingPage;