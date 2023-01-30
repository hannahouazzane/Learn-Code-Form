import React from 'react';
import "./App.css"
import Square from "./Components/Square"
import  { useState } from 'react';
function App() {

  const [user, setUser] = useState("")

  function changeSquare () {
    setUser("X")


  }

 


    
   

   


  return (
   <div className="App">

    <div className="board">

      <div className="row">
        <Square 
          changeSquare= {()=> {
            alert(0)
          }}
          user="{user}"
        
        
        />
        <Square 
          changeSquare= {()=> {
            alert(1)
          }}
          user="{user}"
        
        
        />
        <Square 
          changeSquare= {()=> {
            alert(2)
          }}
          user="{user}"
        
        
        />
        
        
          
      </div>

      <div className="row">
        
        
          
      </div>

      <div className="row">
        
        
          
      </div>
  
  


    </div>


  </div>
  );
}


export default App;
