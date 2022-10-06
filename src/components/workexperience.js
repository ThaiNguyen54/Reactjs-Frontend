import React, {Component} from "react";
export default class WorkExperience extends Component{
    render() {
        return(
            <div className="work section second" id="experiences">
                <div className="container">
                    <h1>Work<br/>Experiences</h1>
                    <ul className="work-list">
                        <li>2014-2015</li>
                        <li><a href="#">PT Traveloka Indonesia</a></li>
                        <li>Web Designer</li>
                    </ul>
                    <ul className="work-list">
                        <li>2014-2015</li>
                        <li><a href="#">Wego</a></li>
                        <li>UI/UX Designer</li>
                    </ul>
                    <ul className="work-list">
                        <li>2014-2015</li>
                        <li><a href="#">Garuda Indonesia</a></li>
                        <li>System Designer</li>
                    </ul>
                </div>
            </div>
        );
    }
}