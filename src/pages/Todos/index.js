import { useEffect, useState } from "react";

function Todos() {
    const [todos, setTodos] = useState(null);
    const [title, setTitle] = useState('');

    const fetchTodos = async () => {
        const response = await fetch('http://localhost:1337/api/todos');
        const data = await response.json();

        setTodos(data.data);
    }

    const postTodo = async (todo) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(todo)
        });

        const data = await response.json();

        fetchTodos();
    }

    const addTodo = (e) => {
        e.preventDefault();

        const newTodo = {title: title, completed: false};

        postTodo(newTodo);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h3>Todo List</h3>

            <div>
                <form onSubmit={addTodo}>
                    <div>
                        <label htmlFor="todo-title">Todo Title</label>
                        <input 
                            id='todo-title'
                            placeholder="Enter your todo title..." 
                            type='text' 
                            onChange={e => setTitle(e.target.value)} 
                            value={title} />
                    </div>

                    <button type="submit">Add Todo</button>
                </form>
            </div>

            {todos && todos.map(todo => <p key={todo.id}>{todo.attributes.title}</p>)}
        </div>
    )
}

export default Todos;