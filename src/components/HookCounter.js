import React, { useState } from 'react';
import '../App.css';

function HookCounter() {
    const initialCount = 0;
    const [count, setCounter] = useState(initialCount);

    const Increment = () => {
        for(let i=0; i< 5; i++) {
            setCounter(previousCount => previousCount + 1);
        }
    }

    return (
        <div className='hook-wrapper'>
            <span>Count: {count}</span>
            <button onClick={() => setCounter(initialCount)}>Reset Button</button>
            <button onClick={() => setCounter(previousCount => previousCount + 1)}>Increment</button>
            <button onClick={() => setCounter(previousCount => previousCount - 1)}>Decrement</button>
            <button onClick={Increment}>Increment counter</button>
        </div>
    )
}

export default HookCounter;