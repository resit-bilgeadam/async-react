import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodosAction } from "../../store/actionCreators";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const fetchTodos = async () => {
    dispatch(fetchTodosAction());
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Todo List</h3>

      <div>
        {todos &&
          todos.map((todo) => (
            <Link to={`${todo.id}`} key={todo.id}>
              {todo.attributes.title}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
