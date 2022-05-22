import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTodoAction } from "../../store/actionCreators";

function TodoDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(null);

  const fetchTodo = async () => {
    const selectedTodo = await dispatch(fetchTodoAction(id));

    setTodo(selectedTodo);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div>
      <h3>Todo Details</h3>
      {todo && (
        <div>
          <h4>{todo.attributes.title}</h4>
          <p>{todo.attributes.text}</p>
        </div>
      )}
    </div>
  );
}

export default TodoDetails;
