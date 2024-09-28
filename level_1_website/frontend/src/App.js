// src/App.js
import React, { useEffect, useState} from 'react';
import UsersList from './components/UsersList';
import { ChakraProvider, Button } from '@chakra-ui/react'



export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
    //alert('You Clicked me!');
  }
  function MyButton({count, onClick}){
    return(
      <Button onClick={handleClick}>
      I'm a button {count} </Button>
    );
  }
  return (
    <ChakraProvider>
      <div className="App">
        <h1>User Management Application</h1>
        <UsersList />
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
      </div>
    </ChakraProvider>
  );
}

//export default App;
