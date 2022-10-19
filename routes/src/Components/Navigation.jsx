import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [userid, setUserid] = useState('');
  const navigate = useNavigate();

  return (
    <form>
      <label htmlFor="id">
        User ID:
        <input type="number" value={userid} onChange={(e) => setUserid(e.target.value)} />
      </label>
      <button type="button" onClick={() => navigate(`user/:${userid}`)}>Log In</button>
    </form>
  );
}

export default Navigation;
