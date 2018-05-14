import React, { Component } from 'react';
import './styles.css';

/* <Button text="click me" clickAction={this.handleClick} color="" clickedDown={true} disabled={false}/>
 * Props: 
 *   - text: string to be displayed on button
 *   - clickAction: function to be called onClick
 *   - color: define the color of the users button
 *   - clickedDown: define if the button is in the clicked down state
 *   - disabled: define if the button is in the disabled state
 */
class Button extends Component {
    state = {}

    render() { 
        const buttonClasses = `cg-button ${this.props.color || "default"} ${this.props.clickedDown ? "clicked-down" : ""}`
        return ( 
            <button className={buttonClasses} onClick={this.props.clickAction} disabled={this.props.disabled}>
                { this.props.text }
            </button>
        )
    }
}
 
export default Button;