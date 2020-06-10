import React, { useState } from 'react';
import '../../App.css';

const AddUserForm = props => {
    const initialFormState = {id: 'null', name: '', username: ''};
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => { 
        const{ name, value }= event.target;
        setUser({...user, [name]: value});
        
    }

    return (
        <form onSubmit={event => {event.preventDefault();
            if (!user.name || !user.username) return;
            props.addUser(user);
            setUser(initialFormState);
            }}>
            <div className='user-container'>
                <label className='label-name'>Name</label>
                <span className='input-container'>
                    <input type='text'
                    name='name'
                    value={user.name}
                    onChange={handleInputChange} />
                </span>
            </div>
            <div className='user-container'>
                <label className='label-name'>User Name</label>
                <span className='input-container'>
                    <input type='text'
                    name='username'
                    value={user.username}
                    onChange={handleInputChange} />
                </span>
            </div>
            <div className='user-container'>
                <button>Add New User</button>
            </div>
        </form>
    )
}

export default AddUserForm;