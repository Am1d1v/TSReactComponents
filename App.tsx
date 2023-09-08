import React from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';



function App() {
  return (
    <div className="App">
      <ToDoItem id='1' completed={false} title='Title 1'/>
    </div>
  );
}

export default App;
