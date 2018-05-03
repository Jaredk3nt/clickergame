import React, { Component } from 'react';
import './styles.css';

class Button extends Component {
    state = {}
    render() { 
        return ( 
            <div className="cg-button">
                { this.props.text }
            </div>
        )
    }
}
 
export default Button;