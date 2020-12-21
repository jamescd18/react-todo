import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [ latestId, setLatestId ] = useState(0);
  const [ inputText, setInputText ] = useState('');
  const [ toDos, setToDos ] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>James' To Do List</h1>
      </header>
      <Form inputText={ inputText } setInputText={ setInputText } 
            toDos={ toDos } setToDos={ setToDos }
            latestId={ latestId } setLatestId={ setLatestId } />
      <ToDoList toDos={ toDos } setToDos={ setToDos } />
    </div>
  );
}

export default App;
