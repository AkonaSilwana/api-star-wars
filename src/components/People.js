import React,{useState, useEffect} from 'react'
import axios from 'axios';


const peopleUrl = "https://swapi.dev/api/people";

function People() {
     const [people, setPeople] = useState([]);

      useEffect(() => {
     axios.get(peopleUrl).then((response) => {
     
     setPeople(response.data.results.map(result =><fieldset key={result}>{result.name}</fieldset> ));
       // console.log(response.data.results[0].name)
     } )
      
    }, [people]);
    
  return (
    <div>
      <h1>People list</h1>
    <p>{setPeople}</p>
    {people}
    </div>
  )
}

export default People