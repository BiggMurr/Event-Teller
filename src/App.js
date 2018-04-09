import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav/Nav';
import route from './../src/route';
import Footer from './component/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <Nav />
            {route}
            <Footer />
          </div>
      </div>
    );
  }
}


export default App;
