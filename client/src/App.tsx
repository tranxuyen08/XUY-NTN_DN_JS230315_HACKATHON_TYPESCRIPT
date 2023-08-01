import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormStudent from './components/formStudent';
import TableStudent from './components/tableStudents';


function App() {
  return (
    <div className="App">
      <FormStudent/>
      <TableStudent/>
    </div>
  );
}

export default App;
