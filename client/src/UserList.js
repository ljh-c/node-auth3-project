import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';

const UserList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axiosWithAuth().get('/users');
        setUsers(data);
      }

      fetchData();
    }
    catch(err) {
      console.dir(err);
    }
  }, []);

  return (
    <>
      {users && users.map(user => <p key={user.id}>{user.username}</p>)}
    </>
  );
};

export default UserList;