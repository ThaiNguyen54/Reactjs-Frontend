import React, {Component} from "react";
export default class Introduction extends Component{
    render() {
        return(
            <div className="intro section" id="about">
                <div className="container">
                    <p>Hi, I’m Thai Nguyen</p>
                    <div className="units-row units-split wrap">
                        <div className="unit-20">
                            <img src="img/Myavatar.jpg" alt="Avatar"/>
                        </div>
                        <div className="unit-80">
                            <h1><br/>My Resume<span id="typed"></span></h1>
                        </div>
                        <p>
                            Thai is a constellation in the far northern sky. Its name is Latin for dragon. Draco is
                            circumpolar (that is, never setting) for many observers in the northern hemisphere. It was
                            one of the 48 constellations listed by the 2nd century astronomer Ptolemy.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}