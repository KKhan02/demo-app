import React, { useState } from 'react';
import './Room.css';


function Room() {
    const [isLit, setLit] = useState(true);
    let [age, setAge] =useState(19);

   
    
 
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`} >
      This Room is {isLit? "lit":"dark"}
      <br/>
      Age: {age}
      <br/>
      <button onClick={()=> setLit(!isLit)}>Toggle Light</button>
      <br />
      <button onClick={() => {
                    console.log("Age updated");
                    setAge(++age);
                    }}>Increment Age</button>
    </div>
  );
}

export default Room;
