import React, { Component } from 'react';
import './styles/App.css';

import Button from './atoms/Button/Button';
import FormInput from './atoms/FormInput/FormInput';
import GradientPane from './atoms/GradientPane/GradientPane';
import RadioInput from './atoms/RadioInput/RadioInput';

class App extends Component {
  updateForm(value) {
    console.log(value);
  }

  clickAction() {
    console.log('click');
  }

  render() {
    const buttonList = [
      { color:'green', text:'Green', click: this.clickAction },
      { color:'blue', text:'Blue', click: this.clickAction },
      { color:'purple', text:'Purple', click: this.clickAction }
    ];

    return (
      <div className="App">
        <div className="landing-container">
          <div className="left-side">
            <div className="split-title">
              <div className="top-text">create your </div>
              <div className="bottom-text">ACCOUNT</div>
            </div>
            <div className="input-wrapper"><FormInput placeholder="Email"/></div>
            <div className="input-wrapper"><FormInput placeholder="Username"/></div>
            <div className="input-wrapper"><FormInput placeholder="Password"/></div>
            <div className="input-wrapper"><FormInput placeholder="Re-type Password"/></div>
            <div className="text-wrapper"><h3>choose your team:</h3></div>
            <div className="radio-wrapper">
              <RadioInput buttons={buttonList}/>
            </div>
            <div className="button-wrapper">
              <Button text="Start clicking!" disabled={false}/>
            </div>
          </div>
          <div className="right-side">
            <GradientPane/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
