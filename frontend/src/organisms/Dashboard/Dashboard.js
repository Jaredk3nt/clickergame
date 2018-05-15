import React, { Component } from 'react';
import './styles.css';

import SideBar from '../../molecules/SideBar/SideBar';
import Button from '../../atoms/Button/Button';
/* <Dashboard color=""/>
 * Props: 
 *   - 
 */
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "purple"
        };
    }

    render() { 
        const classes = `dashboard ${this.state.color}`
        return ( 
            <div className={classes}>
                <SideBar color={this.state.color}/>
                <div className="click-area">
                    <div className="button-wrapper">
                        <Button color={this.state.color}/>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Dashboard;