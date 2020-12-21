import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ inputText }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <ToDo />
            </ul>
        </div>
    );
}

export default ToDoList;
