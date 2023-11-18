import React, { FunctionComponent, useState } from 'react';
import './App.css';
import { data } from './constants';
import List from './components/List';

function App(){

 const [people, setPeople] =  useState(data)
 console.log(people);


// to clear something thinks in a array follow the bellow the step <button
      // type="button" 
      // onClick={() => setPeople([])}> 
      //  Clear 
      //  </button>

  return (
    <div className="App">

     <h1>{people.length}  Birthday Reminder are there </h1>
     <div className="container">
     <List peoples={people} />
     <button
     className='btn'
      type="button" 
      onClick={() => setPeople([])}> 
       Clear 
       </button>
     </div>
   

    </div>
  );
}
export default App;
