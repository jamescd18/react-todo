import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDos, setToDos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                { toDos.map(toDo => <ToDo id={ toDo.id } text={ toDo.text } done={ toDo.done } />) }
            </ul>
        </div>
    );
}

export default ToDoList;
