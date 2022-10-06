import React, {Component} from "react";
export default class TechnicalSkills extends Component{
    render() {
        return(
            <div className="skills section second" id="skills">
                <div className="container">
                    <h1>Technical<br/>Skills</h1>
                    <ul className="skill-list list-flat">
                        <li>Web Technology</li>
                        <li>HTML / CSS / SASS / PHP / Javascript</li>
                    </ul>
                    <ul className="skill-list list-flat">
                        <li>Database</li>
                        <li>MySQL / MongoDB / Oracle / Access</li>
                    </ul>
                    <ul className="skill-list list-flat">
                        <li>Framework</li>
                        <li>Laravel / CodeIgniter / Zend / Ruby On Rails</li>
                    </ul>
                </div>
            </div>
        );
    }
}