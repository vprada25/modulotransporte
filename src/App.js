import React from 'react';
import login from './views/login/login';
import { BrowserRouter as Router , Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={login}></Route>
      </Router> 
    </div>
  );
}

export default App;
