import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries';
import styles from '../styles/UserList.module.css';

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className={styles.userList}>
      {data.getAllUsers.map(user => (
        <li key={user.id} className={styles.userItem}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UserList;
