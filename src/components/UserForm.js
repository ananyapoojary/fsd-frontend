import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../graphql/mutations';
import styles from '../styles/UserForm.module.css';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message
  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error

    // Perform the mutation
    addUser({ variables: { name, email } })
      .then(() => {
        // Reset the form on success
        setName('');
        setEmail('');
      })
      .catch((error) => {
        // Handle the error properly
        if (error.message.includes('Email already exists')) {
          setErrorMessage('This email is already registered!');
        } else {
          setErrorMessage('An unexpected error occurred. Please try again.');
        }
        console.error("Error adding user:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.inputField}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.inputField}
      />
      <button type="submit" className={styles.submitButton}>Add User</button>
      
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </form>
  );
};

export default UserForm;
