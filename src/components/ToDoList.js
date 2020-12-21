import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDos, setToDos, filter, setFilter }) => {

    const filterCheck = (toDo) => {
        if (filter === 'uncompleted') {
            return !toDo.done;
        } else if (filter === 'completed') {
            return toDo.done;
        } else {
            return true;
        }
    }

    return (
        <div className="todo-container">
            <ul className="todo-list">
                { toDos.filter(ele => {
                    return filterCheck(ele);
                }).map(toDo => <ToDo key={ toDo.id } toDo={ toDo } toDos={ toDos } setToDos={ setToDos } />) }
            </ul>
        </div>
    );
}

export default ToDoList;
