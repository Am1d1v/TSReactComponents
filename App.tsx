import React, {useState} from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import ToDoForm from './components/ToDoForm';


function App() {

  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
  }

  const addTodo = () => {
      setTodos([text, ...todos]);
      setText('');
  }

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
