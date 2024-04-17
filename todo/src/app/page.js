"use client";
import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import List from "@/components/List";

export default function Home() {
    const [todo, setTodo] = React.useState([
        // {
        //     title: "Meeting with client",
        //     id: 1,
        //     completed: false,
        // },
        // {
        //     title: "Pick up daughter from school",
        //     id: 2,
        //     completed: true,
        // },
        // {
        //     title: "Drop wife at saloon",
        //     id: 3,
        //     completed: false,
        // },
        // {
        //     title: "Meeting with a boss",
        //     id: 4,
        //     completed: false
        // },
        // {
        //     title: "Buy vegetables",
        //     id: 5,
        //     completed: true,
        // },
        // {
        //     title: "last task",
        //     id: 6,
        //     completed: false,
        // },
    ]);
    React.useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
        try {
            setTodo(JSON.parse(stored));
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
}, []);

    const completed = todo.filter((todo) => todo.completed === true).length;
    const total = todo.length;
    return (
        <div className="wrapper">
            <Header />
            <Hero completed={completed} total={total} />
            <Form todo={todo} setTodo={setTodo} />
            <List todos={todo} setTodo={setTodo} />
        </div>
    );
}
