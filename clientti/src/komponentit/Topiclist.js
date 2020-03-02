import React, { Component } from 'react';

class TopicList extends Component {
    
    render() {
                
        var listTopics = this.props.tiedot.map((b, ind) => {
            return <div style={divi}><p key={b.id}><b>Title</b>: {b.title}<br></br>
            <b>Description</b>: {b.description}<br></br>
            <b>Hours to master</b>: {b.timetomaster}<br></br>
            <b>Starting date</b>: {b.startlearningdate}<br></br>
            <b>In Progress?</b> {b.inprogress}<br></br>
            <button onClick={this.props.delTopic.bind(this, b.id)} style={btnStyle}>Delete</button></p></div>;})
        return (
            <div style={wrapper}>
                {listTopics}
            </div>
        );
    }
}

const divi = {
    border: "2px solid black",
    borderRadius: "3%",
    background:"ghostwhite",
    padding: "3px"
    
}

const wrapper = {
    display: "grid",
    gridTemplateColumns:"repeat(4, 1fr)",
    gridGap: "5em",
    padding: "3em"
}

const btnStyle = {
    fontSize: "15px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "10%",
    cursor: "pointer"
}

export default TopicList;