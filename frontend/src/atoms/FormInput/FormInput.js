import React, { Component } from 'react';
import './styles.css';

/* <FormInput placeholder="username" valueChange={this.updateUsername}/>
 * Props: 
 *   - placeholder: string for placeholder text of input
 *   - valueChange: function to handle input value
 *   - success: true gives success class, false gives error class, undefined gives default behavior
 */
class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.valueChange(event.target.value);
        this.setState({value: event.target.value});
    }

    successState = () => {
        if (this.props.success === undefined) {
            return "";
        } else {
            return this.props.success ? "error" : "success";
        }
    }

    render() { 
        const classes = `${this.successState()}`;
        return ( 
            <div className="form-input">
                <input type={this.props.password !== undefined ? "password" : "text"} placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange} className={classes}/>
            </div>
        )
    }
}
 
export default FormInput;