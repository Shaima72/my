import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Workflow from './components/Workflow';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from './components/Table';
import About from './components/About';
import Dashboard from './components/Dashboard';


function App() {
  /*render() {
    return (
      <div className="App">
        <Header></Header>
        <Workflow></Workflow>
        <Table></Table>
        <Footer></Footer>
      </div>
     
    );
  }*/
  return (
    <Router>
      <div className="App">
        
        <Header></Header>
        <Switch>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/about" component={About} ></Route>
        <Workflow></Workflow>
        </Switch>
        <Footer></Footer>
        
      </div>
    </Router >
  );
}
export default App;