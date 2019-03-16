import React, { Component } from 'react';

import MainContent from './MainContent';
import Footer from './Footer';

import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
