import React, { Component } from 'react';
// import AddTopics from "./AddTopics";
import Topiclist from "./Topiclist"
import {getTopics, addTopic, deleteTopic} from "./Service"

class Topics extends Component {
    state = { Topics:[]} //lisätty
    componentDidMount=()=>{
       this.importTopics();
       
    }
    importTopics=()=>{
        getTopics().then(res => {
            console.log(res.data)
            this.setState({Topics:res.data})
          });
    }

    newTopic = (info) => {
        console.log(info)
        addTopic(info).then(res=>{
            this.importTopics();
        })
    }

    delTopic = (id) => {
        console.log(id)
        deleteTopic(id).then(
        res => this.setState({
        Topics: [...this.state.Topics.filter(data => data.id !== id)]
        })
        )
        this.importTopics(); 
    }

    render() {
        return (
            <div>
                <br></br>
                <h1>All Topics</h1>
                
                <Topiclist tiedot={this.state.Topics} delTopic={this.delTopic}/>
                <br></br>
            </div>
        );
    }
}

export default Topics;