import React, { Component } from 'react';
import './styles.css';

/* <SideBarButton symbol="" key="" clickAction="" toggled="" color=""/>
 * Props: 
 *   - symbol: the name of the symbol file to depict on button
 *   - key: the button identification to be passed upwards to sidebar on click
 *   - clickAction: function to be called onClick, should accept 1 parameter for the key to be pased upwards
 *   - toggled: boolean if the button is active
 */
class SideBarButton extends Component {
    state = {}

    render() { 
        const buttonClasses = `side-bar-button ${this.props.toggled ? 'toggled' : ''} ${this.props.color}`
        return ( 
            <button className={buttonClasses} onClick={this.props.clickAction}>
                { this.props.symbol }
            </button>
        )
    }
}
 
export default SideBarButton;