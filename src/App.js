import React from 'react';
import './App.css';
import RoutineEditor from './Components/RoutineEditor';

class App extends React.Component{
  render()
  {
    return (
      <div className="App">
        <RoutineEditor/>
      </div>
    );
  }
}

export default App;
