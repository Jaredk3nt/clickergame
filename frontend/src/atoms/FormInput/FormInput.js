import React, { Component } from 'react';
import './styles.css';

/* <FormInput placeholder="username" valueChange={this.updateUsername}/>
 * Props: 
 *   - placeholder: string for placeholder text of input
 *   - valueChange: function to handle input value
 */
class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state  = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.valueChange(event.target.value);
        this.setState({value: event.target.value});
    }

    render() { 
        return ( 
            <div className="input-wrapper">
                <input type="text" placeholderText={this.props.placeholder} value={this.state.value} onChange={this.handleChange}/>
            </div>
        )
    }
}
 
export default FormInput;