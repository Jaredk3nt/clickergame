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
        if (props.initalSelect !== undefined) {
            this.setState({
                selectedButton: props.initalSelect
            })
        }
    }

    radioSelected = (button) => {
        if (this.state.selectedButton !== button.id) {
            this.setState({selectedButton: button.id}, () => {
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
                            <div className="radio-input" key={button.id}>
                                <Button clickedDown={this.state.selectedButton === button.id} color={button.color} text={button.text} clickAction={() => this.radioSelected(button)}/>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}
 
export default RadioInput;