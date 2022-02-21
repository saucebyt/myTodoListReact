import React from "react";
import "./TodoListItem.css";
import { DeleteTodo, Todo, ToggleComplete } from "./types";

interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
    deleteTodo: DeleteTodo;
}


export const TodoListItem: React.FC<TodoListItemProps> = ({
    todo,
    toggleComplete,
    deleteTodo,
}) => {
    return (
        <li>
            <label className={todo.complete ? "complete" : undefined}>
                <input 
                    type="checkbox"
                    onChange={() => toggleComplete(todo)}
                    checked={todo.complete}
                />
                {todo.text}
            </label>
            <button className="deleteButton" onClick={() => deleteTodo(todo)}>Delete</button>
        </li>
    )
}