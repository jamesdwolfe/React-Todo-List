import React from "react";

const Todo = (props) => {
    const deleteHandler = () => {
        props.setTodos(
            props.todos.filter(obj => obj.id !== props.todo.id)
        );
    }

    const completeHandler = () => {
        props.setTodos(props.todos.map(obj => {
                if(obj.id===props.todo.id){
                    return {
                        ...obj, completed:!obj.completed
                    }  
                }
                return obj;
            }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.text}</li>

            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;