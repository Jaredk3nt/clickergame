import React, { Component } from 'react';
import './styles/App.css';

import Button from './atoms/Button/Button';
import FormInput from './atoms/FormInput/FormInput';

class App extends Component {
  updateForm(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="App">
        <div className="button-holder">
          <FormInput placeholder="username" valueChange={this.updateForm}/>
          <Button text="Green"/>
        </div>
      </div>
    );
  }
}

export default App;
