import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home'


function App() {
  return (
    
      <Route exact path="/" component={Home} />
    
  );
}

export default App;
