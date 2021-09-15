import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import fire from './config/fire';
import Home from './Home';
import Login from './Login';
import Playlist from './Playlist';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home/>) : (<Login/>)}
        <Router>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/playlist" component={Playlist}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
