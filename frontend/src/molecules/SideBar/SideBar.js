import React, { Component } from 'react';
import './styles.css';

import SideBarButton from '../../atoms/SideBarButton/SideBarButton';
/* <SideBar color=""/>
 * Props: 
 *   - 
 */
class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'team'
        }
    }

    toggleActive = (key) => {
        if (!(this.state.activeTab === key)) {
            this.setState({
                activeTab: key
            }, () => {
                console.log(this.state.activeTab);
            });
        }
    }

    render() { 
        const classes = `side-bar-container ${this.props.color}`
        const tabs = [
            { symbol: "team", key: "team" },
            { symbol: "award", key: "medals" },
            { symbol: "cart", key: "shop" },
            { symbol: "settings", key: "settings" }
        ]
        return ( 
            <div className={classes}>
                <div className="side-bar-tabs">
                    {
                        tabs.map( tab => 
                            <SideBarButton symbol={tab.symbol} id={tab.key}toggled={tab.key === this.state.activeTab} clickAction={this.toggleActive} color={this.props.color} key={tab.key}/>
                        )
                    }
                </div><div className="side-bar-active-area">
                    {this.state.activeTab}
                </div>
            </div>
        )
    }
}
 
export default SideBar;