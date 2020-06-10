import React, { useState } from 'react';

const HooksWithObject = () => {

    const [userName, setName] = useState({firstName: '', lastName: ''});
    return(
        <div className='user-name'>
            <form>
            <input 
            type='text'
            placeholder='firstname' 
            value={userName.firstName}
            onChange={e => setName({...userName, firstName: e.target.value})} />
            <input 
            type='text' 
            placeholder='lastname'
            value={userName.lastName}
            onChange={e => setName({...userName, lastName: e.target.value})} />

            <h2>Firstname: {userName.firstName}</h2>
            <h2>Lastname: {userName.lastName}</h2>
            </form>
        </div>
    )
}

export default HooksWithObject;