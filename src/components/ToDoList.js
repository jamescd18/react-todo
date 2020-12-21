import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDos, setToDos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                { toDos.map(toDo => <ToDo key={ toDo.id } toDo={ toDo }
                                        toDos={ toDos } setToDos={ setToDos } />) }
            </ul>
        </div>
    );
}

export default ToDoList;
