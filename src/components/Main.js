import React, { Component } from "react";
import {
    Route,
    Link,
    Switch,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Stuff";
  import Contact from "./Contact";
  import Error404 from './Error404'

 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stuff">Stuff</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="content">  
          <Switch>    
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>   
            <Route component={Error404}/>   
          </Switch>  
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;