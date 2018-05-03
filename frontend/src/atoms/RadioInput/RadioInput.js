import React, { Component } from 'react';
import './styles.css';
import Button from '@/atoms/Button/Button';

/* <RadioInput />
 * Props: 
 *   - 
 */
class RadioInput extends Component {
    state = {}

    render() { 
        return ( 
            <div className="radio-input-wrapper">
                { 
                    this.props.buttons.map( (button) => 
                        <Button buttonColor={button.color} text={button.text} clickAction={button.click}/>
                    )
                }
            </div>
        )
    }
}
 
export default RadioInput;