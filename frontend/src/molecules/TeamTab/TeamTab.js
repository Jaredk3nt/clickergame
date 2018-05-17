import React, { Component } from 'react';
import './styles.css';

import ScoreCard from '../../atoms/ScoreCard/ScoreCard';
import LeaderboardItem from '../../atoms/LeaderboardItem/LeaderboardItem';
/* <TeamTab color=""/>
 * Props: 
 *   - 
 */
class TeamTab extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    getLeaderboard = () => {
        const leaderboard = [
            { name: "jeffthecat", count: "12839" },
            { name: "mattroosty", count: "10346" },
            { name: "novakeen", count: "9162" },
            { name: "piper", count: "7926" },
            { name: "robotbutler", count: "5499" },
        ];
        return (
            leaderboard.map( (leader, i) => 
                <LeaderboardItem number={i + 1} name={leader.name} count={leader.count} key={i}/>
            )
        )
    }

    render() { 
        const classes = `team-tab ${this.props.color}`;
        const colors = [
            'green',
            'blue',
            'purple'
        ];
        return ( 
            <div className={classes}>
                <div className="top-container">
                    <ScoreCard color={this.props.color} count="15003457"/>
                    <div className="team-leaderboard">
                        <div className="title">{this.props.color} Leaderboard</div>
                        {
                            this.getLeaderboard()
                        }
                    </div>
                </div>
                <div className="bottom-container">
                    {
                        // Probably replace this with function to get stored count values
                        colors.map( color => 
                            color === this.props.color ? '' : <ScoreCard color={color} count="999999"/>
                        )
                    }
                </div>
            </div>
        )
    }
}
 
export default TeamTab;