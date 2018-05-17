import React, { Component } from 'react';
import './styles.css';

class LeaderboardItem extends Component {
    state = {}

    render() {
        const classes= `${this.props.highlighted ? 'highlighted' : ''}`
        return (
            <ul className={classes}>
                <li className="number">{this.props.number}.</li>
                <li className="name">{this.props.name}</li>
                <li className="count">{this.props.count}</li>
            </ul>
        )
    }
}

export default LeaderboardItem;