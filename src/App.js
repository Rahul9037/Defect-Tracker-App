import React from 'react';
import './App.css';
import { Switch , Route} from 'react-router-dom';
import Login from './pages/login/login.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import AddDefect from './components/adddefect/adddefect.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={HomePage} /> 
        <Route path="/adddefect" component={AddDefect}/>
      </Switch>
    </div>
  );
}

export default App;
