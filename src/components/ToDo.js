import React from 'react';

const ToDo = ({ toDo, toDos, setToDos }) => {

    const doneHandler = (e) => {
        setToDos(toDos.map((item) => {
            if (item.id === toDo.id) {
                return {
                    ...item,
                    done: !item.done
                }
            }
            return item;
        }));
    };

    const deleteHandler = (e) => {
        setToDos(toDos.filter(ele => ele.id !== toDo.id));
    };

    return (
        <div className="todo">
            <li className="todo-item">
                { toDo.text }
                </li>
            <button onClick={doneHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default ToDo;