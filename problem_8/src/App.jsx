import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList';

const App = () => {
  return (
    <ChakraProvider>
      <TodoList />
    </ChakraProvider>
  );
};


export default App
