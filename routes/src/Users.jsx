import { useParams } from 'react';
import { useState } from 'react';

const Users = () => {
    const {id} = useParams;
    const [searchID, setSearchID] = useState("");
    const [users, setUser] = useState([{
        id: 0,
        name: "unknown"
    },{
        id: 1,
        name: "Cloud"
    },
    {
        id: 2,
        name: "Squall"
    }
])

    return (
        <>
        <form>
            <label for="id">User ID:</label>
            <input type="number" value="id"></input>
            <button type="button">Log In</button>
        </form>
        </>
    )
}

export default Users;