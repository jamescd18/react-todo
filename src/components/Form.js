import React from 'react';

const Form = ({ inputText, setInputText, toDos, setToDos, latestId, setLatestId, filter, setFilter }) => {
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setToDos([
            ...toDos, { id: latestId, text: inputText, done: false }
        ]);

        setInputText('');
        setLatestId(latestId + 1);
    };

    const filterHandler = (e) => {
        setFilter(e.target.value);
    };

    return (
        <form>
            <input value={ inputText } onChange={ inputTextHandler } type="text" className="todo-input" />
            <button onClick={ submitToDoHandler } className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={ filterHandler } name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;