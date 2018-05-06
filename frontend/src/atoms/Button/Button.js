import React, { Component } from 'react';
import './styles.css';

/* <Button text="click me" clickAction={this.handleClick}/>
 * Props: 
 *   - text: string to be displayed on button
 *   - clickAction: function to be called onClick
 */
class Button extends Component {
    state = {}

    render() { 
        const buttonClasses = `cg-button ${this.props.buttonColor || "default"} ${this.props.clickedDown ? "clicked-down" : ""}`
        return ( 
            <button className={buttonClasses} onClick={this.props.clickAction} disabled={this.props.disabled}>
                { this.props.text }
            </button>
        )
    }
}
 
export default Button;