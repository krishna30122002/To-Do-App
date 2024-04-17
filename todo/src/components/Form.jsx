"use client";
import Image from "next/image";
import plus from "../img/plus.svg";
import React from "react";

export default function Form({ setTodo }) {
    const [todos, setTodos] = React.useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.todo.value;
        const newToDo = {
            title: value,
            id: self.crypto.randomUUID(),
            completed: false,
        };
        setTodo((p) => [...p, newToDo]);
        const updated = JSON.stringify([...todos, newToDo]);
        localStorage.setItem("todos", updated);
        e.target.reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="What's your next task?"
                />
            </label>
            <button type="submit">
                <span className="visually-hidden">Submit</span>
                <Image width={20} color="white" src={plus} alt="Plus icon" />
            </button>
        </form>
    );
}
