import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const [userid, setUserid] = useState("");
    const navigate = useNavigate();
    
    return (
        <>
        <form>
            <label for="id">User ID:</label>
            <input type="number" value={userid} onChange={(e)=>setUserid(e.target.value)}></input>
            <button type="button" onClick={()=>navigate("user/:"+userid)}>Log In</button>
        </form>
        </>
    );
}

export default Navigation;