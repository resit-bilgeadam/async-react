import {useState, useEffect} from 'react';

function Home() {
    const [users, setUsers] = useState(null);

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h3>User List</h3>
            {/* {users ? user.map(...) : null} */}

            {
                users && users.map(user => <p key={user.id}>{user.name}</p>)
            }
        </div>
    )
}

export default Home;
