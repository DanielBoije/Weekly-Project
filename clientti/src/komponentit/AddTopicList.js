import React, { Component } from 'react';
import AddTopics from "./AddTopics"
import {getTopics, addTopic} from "./Service"

class AddTopicList extends Component {
    state = { Topics:[]}
    importTopics=()=>{
        getTopics().then(res => {
            console.log(res.data)
            this.setState({Topics:res.data})
          });
    }

    newTopic = (info) => {
        addTopic(info).then(res=>{
            this.importTopics();
        })
    }
    render() {
        return (
            <div>
                <AddTopics tieto={this.newTopic}/>
            </div>
        );
    }
}

export default AddTopicList;