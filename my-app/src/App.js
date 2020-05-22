import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from "react-router";
import Landingpage from './components/Landingpage.js';
import Navbar from './components/Navbar.js';
import loader from './assets/loader.gif'

class App extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,

        }
    }
render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return loader; // render null when app is not ready
    }
    return (
            <div>
            <Navbar />
            <Landingpage />
            </div>
        )
    }
}
export default App;