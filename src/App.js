import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './styles/global.css'; // Ensure this path is correct

const App = () => {
  return (
    <div>
      <h1>User Management</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
