import React, { useState } from 'react';
import '../App.css';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';

const CrudApp = () => {
    const usersData = [
        { id: '1', name: 'aaa', userName: 'aaa.aaa' },
        { id: '2', name: 'bbb', userName: 'bbb.bbb' }
    ];

    const [users, setUsers] = useState(usersData);
    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };
    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id));
      };

      const [editing, setEditing] = useState(false);
      const initialFormState = { id: null, name: "", username: "" };

      const [currentUser, setCurrentUser] = useState(initialFormState);
    
      const editRow = user => {
        setEditing(true);
        setCurrentUser({ id: user.id, name: user.name, username: user.username });
      };
    
      const updateUser = (id, updateUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updateUser : user)));
      };  
    return (
        <div className='crud-wrapper'>
            <h1>CRUD App with Hooks</h1>
            <h2>Add User</h2>
            {/* <AddUserForm addUser={addUser} deleteUser={deleteUser}/>
            <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} /> */}
          <div className="flex-large">
          {editing ? (
            <div>
              <h2>Eidt User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
        </div>
       
    )
}

export default CrudApp;