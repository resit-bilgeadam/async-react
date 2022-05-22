import { useEffect, useState } from "react";
import s from "./Todos.module.css";

function Todos() {
  const [todos, setTodos] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:1337/api/todos");
    const data = await response.json();

    setTodos(data.data);
  };

  const postTodo = async (todo) => {
    const response = await fetch("http://localhost:1337/api/todos", {
      method: "POST",
      body: JSON.stringify({ data: todo }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
    console.log(data);

    fetchTodos();
  };

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = { title, text, isCompleted: false };

    postTodo(newTodo);
  };

  const deleteTodo = async (todoId) => {
    const response = await fetch(`http://localhost:1337/api/todos/${todoId}`, {
      method: "DELETE",
    });

    const data = await response.json();

    console.log(data);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Todo List</h3>

      <div>
        <form onSubmit={addTodo}>
          <div className={s.formGroup}>
            <label htmlFor="todo-title">Todo Title</label>
            <input
              id="todo-title"
              placeholder="Enter your todo title..."
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className={s.formGroup}>
            <label htmlFor="todo-text">Todo Text</label>
            <textarea
              id="todo-text"
              placeholder="Enter your todo text..."
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></textarea>
          </div>

          <button type="submit">Add Todo</button>
        </form>
      </div>

      {todos &&
        todos.map((todo) => (
          <p key={todo.id}>
            {todo.attributes.title}
            <button onClick={() => deleteTodo(todo.id)}>DEL</button>
          </p>
        ))}
    </div>
  );
}

export default Todos;
