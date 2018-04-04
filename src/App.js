import React, { Component } from 'react';
import logo from './eventteller.png';
import './App.css';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Favorites from './component/Favorites/Favorites';
import Form from './component/Form/Form';
import Nav from './component/Nav/Nav';
import Newsletter from './component/Newsletter/Newsletter';
import Results from './component/Results/Results';
import Carousel  from './component/Carousel/Carousel';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <Auth />
          <Dashboard />
          <Favorites />
          <Form />
          <Nav />
          <Newsletter />
          <Results />
          <div>
            <Carousel />
          </div>
      </div>
    );
  }
}


export default App;
