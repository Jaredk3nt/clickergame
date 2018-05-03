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
        const buttonClasses = `cg-button ${this.props.buttonColor || "default"}`
        return ( 
            <button className={buttonClasses} onClick={this.props.clickAction}>
                { this.props.text }
            </button>
        )
    }
}
 
export default Button;