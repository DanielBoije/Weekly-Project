import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "../navigation.css";

class Navigaatio extends Component {
    render() {
        return (
            <div>
                <NavLink className= "navi" to="/">Home</NavLink> <NavLink className= "navi" to="/topics">Topics</NavLink> <NavLink className= "navi" to="/addtopiclist">Add Topics</NavLink>
                {/* <NavLink to="/addtopics">Add Topics</NavLink><br></br> */}
                {/* <NavLink to="/addusers">Add Users</NavLink><br></br> */}
            </div>
        );
    }
}

export default Navigaatio;