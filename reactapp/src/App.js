import './App.css';
import React from 'react';

import Post1 from './posts/posts1';
import Header from './components/Header';
import Navigation from './components/navbar';

function App() {
  return (
    <div className="app-container">
      <Header />
      {/* <Navigation /> */}
      <div className="body-content">
        <h1>Welcome to your app!</h1>
      </div>
    </div>
  )
}

export default App;
