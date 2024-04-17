"use client";
import React from "react";
import editIcon from "../img/edit.svg"; 
import deleteIcon from "../img/delete.svg"; 
import Image from "next/image";

function Item({ item, setTodo }) {

    const [isEditing, setIsEditing] = React.useState(false); 
    // const [todos, setTodos] = React.useState(false); 
    const inputRef = React.useRef(null);

    const handleEdit = () => {
        setIsEditing(true); 
    };

    React.useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.setSelectionRange(
                inputRef.current.value.length,
                inputRef.current.value.length
            );
        }
    }, [isEditing]);

    const handleInputSubmit = (e) => {
        e.preventDefault();
        const updatedTodos = JSON.stringify(item);
        localStorage.setItem("todos", updatedTodos);
        setIsEditing(false);
    };

    const handleInputBlur = () => {
        const updatedTodos = JSON.stringify(item);
        localStorage.setItem("todos", updatedTodos);
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        setTodo((prev) =>
            prev.map((todo) =>
                todo.id === item.id ? { ...todo, title: e.target.value } : todo
            )
        );
    };
    const handleDelete = () => {
    setTodo((p) => p.filter((todo) => todo.id !== item.id));
    const updatedTodos = JSON.stringify(
        setTodo((p) => p.filter((todo) => todo.id !== item.id))
      );
    localStorage.setItem("todos", updatedTodos);
};


    const completeTodo = () => {
        setTodo((p) =>
            p.map((t) =>
                t.id === item.id ? { ...t, completed: !t.completed } : t
            )
        );
        const updatedTodos = JSON.stringify(item);
        localStorage.setItem("todos", updatedTodos);
    };

    return (
        <li id={item?.id} className="todo_item">
            {isEditing ? (
                <form className="edit-form" onSubmit={handleInputSubmit}>
                    <label htmlFor="edit-todo">
                        <input
                            ref={inputRef}
                            type="text"
                            name="edit-todo"
                            id="edit-todo"
                            defaultValue={item?.title}
                            onBlur={handleInputBlur}
                            onChange={handleInputChange}
                        />
                    </label>
                </form>
            ) : (
                <>
                    <button className="todo_items_left" onClick={completeTodo}>
                        <svg
                            className="svg_list"
                            fill={item.completed ? "#5BBCFF" : "#162129"}
                        >
                            <circle className="circle_zero"
                                cx="11.998"
                                cy="11.998"
                                fillRule="nonzero"
                                r="9.998"
                            />
                        </svg>
                        <p
                            style={
                                item.completed
                                    ? { textDecoration: "line-through" }
                                    : {}
                            }
                        >
                            {item?.title}
                        </p>
                    </button>
                    <div className="todo_items_right">
                        <button
                            className="button-list-right"
                            onClick={handleEdit}
                        >
                            <span className="visually-hidden">Edit</span>
                            <Image
                                className="list_image"
                                src={editIcon} // Use the renamed import
                                width={40}
                                alt="edit"
                            />
                        </button>
                        <button
                            className="button-list-right"
                            onClick={handleDelete}
                        >
                            <span className="visually-hidden">Delete</span>
                            <Image
                                className="list_image"
                                src={deleteIcon} // Use the renamed import
                                width={40}
                                alt="delete_icon"
                            />
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}

export default function List({ todos, setTodo }) {
    return (
        <ol className="todo_list">
            {todos && todos.length > 0 ? (
                todos?.map((item, idx) => (
                    <Item
                        key={idx}
                        item={item}
                        todo={todos}
                        setTodo={setTodo}
                    />
                ))
            ) : (
                <p>Hey there, I am your Daily Planner :)</p>
            )}
        </ol>
    );
}
