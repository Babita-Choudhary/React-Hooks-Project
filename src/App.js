import React from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HooksWithObject from './components/HooksWithObject';
import CrudApp from './components/CrudApp';

function App() {
  return (
    <div className="App">
    {/* <PostForm /> */}
    {/* <PostList /> */}
    {/* <HookCounter />
    <HooksWithObject /> */}
    <CrudApp />
    </div>
  );
}

export default App;
