import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Users() {
  const params = useParams();
  const [users] = useState([
    {
      id: '0',
      name: 'unknown',
    }, {
      id: '1',
      name: 'Cloud',
    }, {
      id: '2',
      name: 'Sephiroth',
    }, {
      id: '3',
      name: 'Noctis',
    }, {
      id: '4',
      name: 'Squall',
    }]);

  if (params.id) {
    return (
      <p>
        Welcome
        {users[params.id].name}
      </p>
    );
  }
  return (
    <>
      {
                users.map((user) => (
                  <p>
                    <b>ID:</b>
                    {' '}
                    {user.id}
                    .
                    {' '}
                    <b>Name:</b>
                    {' '}
                    {user.name}
                    {' '}
                  </p>
                ))
            }
    </>
  );
}

export default Users;
