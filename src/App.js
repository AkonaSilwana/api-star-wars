import React,{useState} from 'react';
import People from './components/People';
import Planets from './components/Planets';
import './App.css';
import { ChakraProvider, Button, Heading } from '@chakra-ui/react';


function App() {
const [correctName, setCorrectName] = useState(false)
 

const changeNames = () => {
      setCorrectName(!correctName)
    }
    
   return (
    <ChakraProvider>

    <div className="App">
      <header className="App-header">
      <Heading color="#33475c">STAR WARS</Heading>
      <Button colorScheme="teal" onClick={changeNames}>Change Names</Button>
      <h2>{correctName ? <People/> : <Planets/>}</h2>
    
     
      </header>
       
    </div>
    </ChakraProvider>
  );
  
}

export default App;
