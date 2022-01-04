import React, {Component} from 'react';
import './App.css';
import StudentsHome from "./StudentsHome"
import Home from "./Home"
import StudentsDetails from "./StudentsDetails"
import ContactUs from "./ContactUs";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <StudentsHome />
      <Switch>
      <Route path = "/" exact component={Home} />
      <Route path = "/home" component={Home}/>
      <Route path = "/students" component={StudentsDetails}/>
      <Route path = "/contact" component={ContactUs}/>
      </Switch>

    </div>
    </Router>
  );
 }
}

export default App;
