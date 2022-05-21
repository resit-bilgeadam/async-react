import { Link } from "react-router-dom";

function Toolbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='todos'>Todos</Link>
        </nav>
    )
}

export default Toolbar;
