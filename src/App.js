import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [ latestId, setLatestId ] = useState(0);
  const [ inputText, setInputText ] = useState('');
  const [ toDos, setToDos ] = useState([]);
  const [ filter, setFilter ] = useState('all');

  // only runs once when app reloaded
  useEffect(() => {
    getLocal();
  }, []);

  // runs whenever toDos state object is updated
  useEffect(() => {
    saveToLocal();
  }, [toDos]);

  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(toDos));
  };

  const getLocal = () => {
    const localList = JSON.parse(localStorage.getItem('todos'));
    if (localList === null || localList === [] || localList.length === 0) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setToDos(localList);
      setLatestId(Math.max(...localList.map(ele => ele.id)) + 1);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>James' To Do List</h1>
      </header>
      <Form inputText={ inputText } setInputText={ setInputText } 
            toDos={ toDos } setToDos={ setToDos }
            latestId={ latestId } setLatestId={ setLatestId }
            filter={ filter } setFilter={ setFilter } />
      <ToDoList toDos={ toDos } setToDos={ setToDos }
                filter={ filter } setFilter={ setFilter } />
    </div>
  );
}

export default App;
