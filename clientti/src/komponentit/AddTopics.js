import React, { Component } from 'react';

class AddTopics extends Component {
    state = {
        title: '', 
        description: '',
        timetomaster: 0,
        startlearningdate: '',
        inprogress: null

    }

    //Titlen lisäys
    titleMuuttui = (tapahtuma) => {
        this.setState({title: tapahtuma.target.value});
    }

    //Kuvauksen lisäys
    descriptionMuuttui = (tapahtuma) => {
        this.setState({description: tapahtuma.target.value});
    }

    //Arvioitu aika
    hoursToMasterMuuttui = (tapahtuma) => {
        this.setState({timetomaster: tapahtuma.target.value});
    }

    //Päivämäärä kalenteri
    startlearningdateMuuttui = (tapahtuma) => {
        console.log(tapahtuma.target.value)
        this.setState({startlearningdate: tapahtuma.target.value});
    }

    //inprogress radiobuttonit
    inprogressMuuttui = (tapahtuma) => {
        this.setState({inprogress: tapahtuma.target.value});
        }

    //Submit Buttoni
    valmis = (e) => {
        e.preventDefault();
        this.props.tieto(this.state);
        this.setState({title: '', description: '', timetomaster: 0, startlearningdate: '', inprogress: null})
        
    }
    
    render() {
            
        return (
            <form style={styling}>
                
                <h2>Add a new topic</h2>

                <b>Title</b> <br></br><input value={this.state.title} onChange={this.titleMuuttui}/><br/><br></br>
                
                <b>Descripton</b> <br></br><textarea value={this.state.description} onChange={this.descriptionMuuttui}/><br/><br></br>
                
                <b>Hours to master</b> <br></br><input style={timeStyle} value={this.state.timetomaster} 
                onChange={this.hoursToMasterMuuttui} type="number"/><br></br><br></br>
                
                <b>Starting Date</b> <br></br><input value={this.state.startlearningdate} 
                onChange={this.startlearningdateMuuttui} type="date"/><br></br><br></br>
                
                <b>In progress?</b> <br></br>
                <label><input type="radio" name="radio" value="Yes" checked={this.state.inprogress === "Yes"} 
                onChange={this.inprogressMuuttui}/>Yes</label>
                <label><input type="radio" name="radio" value="No" checked={this.state.inprogress === "No"} 
                onChange={this.inprogressMuuttui} />No</label>

                <br></br><br></br>
                <input style={buttonstyle} value="Add Topic" type="submit" onClick={this.valmis}/>
            </form>
        );
    }
}

const styling = {
    textAlign: "center",
    margin: "20px",
    border: "2px solid black",
    borderRadius: "10px",
    width: "400px",
    height: "520px",
    display: "inline-block"
}

const buttonstyle = {
    height: "3em",
    width: "6em",
    cursor: "pointer",
    fontWeight: "bold"
}

const timeStyle = {
    textAlign:"center", width:"35px", min:0
}
export default AddTopics;