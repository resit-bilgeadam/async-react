import { Link } from "react-router-dom";

function Toolbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="simple-todos">Simple Todos</Link>
      <Link to="todos">Redux Todos</Link>
    </nav>
  );
}

export default Toolbar;
