import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Favorites from './component/Favorites/Favorites';
import Form from './component/Form/Form';
import Nav from './component/Nav/Nav';
import Newsletter from './component/Newsletter/Newsletter';
import Results from './component/Results/Results';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Auth />
          <Dashboard />
          <Favorites />
          <Form />
          <Nav />
          <Newsletter />
          <Results />
      </div>
    );
  }
}

export default App;
