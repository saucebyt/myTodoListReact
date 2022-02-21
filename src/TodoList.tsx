import React from "react";
import { Todo, ToggleComplete, DeleteTodo } from "./types";
import { TodoListItem } from "./TodoListItem";
import "./Nav.css";

interface TodoListProps {
    todos: Array<Todo>;
    toggleComplete: ToggleComplete;
    deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    toggleComplete,
    deleteTodo
}) => {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-nav"><a href="#">myTodo</a></ul>
            </nav>
            <ul>
                {todos.map(todo => (
                    <TodoListItem
                        key={todo.text}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    )
}