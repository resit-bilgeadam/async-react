import { Link, Outlet } from "react-router-dom";

function TodosLayout() {
  return (
    <div>
      <h1>Redux Todo App</h1>
      <nav>
        <Link to="/todos">Todo List</Link>
        <Link to="create">Create A Todo</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default TodosLayout;
