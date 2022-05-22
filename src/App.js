import { Routes, Route } from "react-router-dom";
import s from "./App.module.css";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import SimpleTodos from "./pages/SimpleTodos";
import TodosLayout from "./layouts/TodosLayout";
import TodoList from "./pages/TodoList";
import TodoCreate from "./pages/TodoCreate";
import TodoDetails from "./pages/TodoDetails";

function App() {
  return (
    <>
      <Toolbar />
      <div className={s.container}>
        <h1>Async React</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="simple-todos" element={<SimpleTodos />} />
          <Route path="todos" element={<TodosLayout />}>
            <Route index element={<TodoList />} />
            <Route path="create" element={<TodoCreate />} />
            <Route path=":id" element={<TodoDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
