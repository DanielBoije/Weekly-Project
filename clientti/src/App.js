import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigaatio from "./komponentit/Navigaatio"
import Koti from "./komponentit/Koti"
import Topics from "./komponentit/Topics"
import addTopicList from "./komponentit/AddTopicList"

function App() {
  return (
    <Router>
    <div className="App">
      <div className="header">
      <Navigaatio/>
      </div>
      <Switch>
          <Route exact path="/" component={Koti}/>
          <Route path="/topics" component={Topics}/>
          <Route path="/addtopiclist" component={addTopicList}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
