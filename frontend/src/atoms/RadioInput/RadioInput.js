import React, { Component } from 'react';
import './styles.css';
import Button from '../../atoms/Button/Button';

/* <RadioInput />
 * Props: 
 *   - 
 */
class RadioInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedButton: undefined
        };
    }

    radioSelected = (button) => {
        if (this.state.selectedButton !== button) {
            this.setState({selectedButton: button}, () => {
                this.props.clickAction(this.state.selectedButton);
            });
        }
    }

    render() { 
        return ( 
            <div className="radio-input-wrapper">
                { 
                    this.props.buttons.map( (button) => {
                        return (
                            <div className="radio-input">
                                <Button clickedDown={this.state.selectedButton === button} buttonColor={button.color} text={button.text} clickAction={() => this.radioSelected(button)} key={button.id}/>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}
 
export default RadioInput;