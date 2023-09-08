import React, {useEffect, useState} from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import ToDoForm from './components/ToDoForm';
import {Todo} from './types'


function App() {

  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
  }

  const addTodo = () => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false

    }
      setTodos([newTodo, ...todos]);
      setText('');
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data: Todo[]) => {
      setTodos(data)
    })
  }, []);

  return (
    <div className="App">
      <ToDoForm
        value={text}
        onChange={handleInput}
        handleClick={addTodo}
       />
      <ToDoItem id='1' completed={false} title={text} style={{margin: '5px', borderRadius: '5px', height: '30px'}}/>
    </div>
  );
}

export default App;
