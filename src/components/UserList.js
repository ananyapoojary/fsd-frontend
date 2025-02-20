import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries';
import styles from '../styles/UserList.module.css';

const UserList = () => {
  const [showUsers, setShowUsers] = useState(false);

  // useQuery with refetch function
  const { loading, error, data, refetch } = useQuery(GET_USERS, {
    skip: !showUsers, // Skip query until showUsers is true
  });

  const handleDisplayUsers = () => {
    setShowUsers(true); // Trigger the users display on button click
    refetch(); // Manually refetch users each time the button is clicked
  };

  return (
    <div>
      <button onClick={handleDisplayUsers} className={styles.displayButton}>
        Display Users
      </button>

      {showUsers && (
        <>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data && (
            <ul className={styles.userList}>
              {data.getAllUsers.map(user => (
                <li key={user.id} className={styles.userItem}>
                  {user.name} ({user.email})
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default UserList;
