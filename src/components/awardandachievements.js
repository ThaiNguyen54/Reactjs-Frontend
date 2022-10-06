import React, {Component} from "react";
export default class AwardAndAchievements extends Component{
    render() {
        return(
            <div className="award section second" id="achievements">
                <div className="container">
                    <h1>Award &amp;<br/>Achievements</h1>
                    <ul className="award-list list-flat">
                        <li>January 2014</li>
                        <li>Attained PHP5 certification</li>
                        <li>Hold world/Olympic record</li>
                    </ul>
                    <ul className="award-list list-flat">
                        <li>December 2014</li>
                        <li>Audited X number of clients in only Y amount of time</li>
                        <li>Held a perfect attendance record</li>
                        <li>Were promoted after only X months in the role</li>
                    </ul>
                    <ul className="award-list list-flat">
                        <li>March 2014</li>
                        <li>Placed employees at X companies</li>
                        <li>United multiple teams post-merger</li>
                    </ul>
                </div>
            </div>
        );
    }
}