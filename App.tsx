import React from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';



function App() {
  return (
    <div className="App">
      <ToDoItem id='1' completed={false} title='Title 1' style={{margin: '5px', borderRadius: '5px', height: '30px'}}/>
    </div>
  );
}

export default App;
