import React,{useState , useEffect} from 'react'
import axios from 'axios';




const planetUrl = "https://swapi.dev/api/planets";

function Planets() {
     const [planet , setPlanet] = useState([]);

      useEffect (() => {
        axios.get(planetUrl).then((response) => {
            setPlanet(response.data.results.map(result => <fieldset key={result}>{result.name}</fieldset>));

        });
     },[planet]);
  return (
    
    <div>
      <h1>Planets List</h1>
    <p>{setPlanet}</p>
    {planet}
    
    </div>
    
  )
}

export default Planets