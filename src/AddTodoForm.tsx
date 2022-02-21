import React, { useState, ChangeEvent, FormEvent } from "react";
import { AddTodo } from "./types";

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] =  useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <form className="addButton">
            <input type="text" placeholder="Enter your Task here" value={newTodo} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>
                Add Todo
            </button>
        </form>
    );
}