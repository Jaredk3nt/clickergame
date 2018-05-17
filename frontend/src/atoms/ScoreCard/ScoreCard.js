import React, { Component } from 'react';
import './styles.css';

/* <ScoreCard color=""/>
 * Props: 
 *   - 
 */
class ScoreCard extends Component {
    state = {}

    render() { 
        const classes = `score-card ${this.props.color}`
        return ( 
            <div className={classes}>
                <div className="title">{this.props.color} team score</div>
                <div className="count">{this.props.count}</div>
            </div>
        )
    }
}
 
export default ScoreCard;