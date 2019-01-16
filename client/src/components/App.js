import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

const App = () => (
  <div>
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  </div>
);

export default App;