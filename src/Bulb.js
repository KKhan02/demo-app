import React, { useState } from 'react';
import './Bulb.css';
import logo from './idea-512.png';
import './thermometer.css';


function Bulb() {
   const [isLit, setLit] = useState(true);
   let [temperature,setTemperature] = useState(22);
    


  return (
    <div>
    <div className={`Bulb ${isLit ? "lit" : "dark"}`} >
      
        <div className="Bulb">
          <img src={logo}/>    
        </div>
        <button className="ON"
        onClick={()=>{
          console.log("ON");
          if (isLit === false) {
            setLit(!isLit);
            }}} autoFocus> ON</button> 
        <button className="OFF"
                 onClick={()=>{
                  console.log("OFF");
                  if (isLit === true) setLit(!isLit)}}> OFF</button>    
      </div>
      <div className="Thermo">
      <div className="doughnut">
        <div className="inner-doughnut">
            <div className="inner-inner-doughnut">
            <button id="increment"
            onClick={()=>{
              console.log("increment");
              setTemperature(++temperature);
            }}><b>+</b></button>
            <button id="decrement"
            onClick={()=>{
              console.log("decrement");
              setTemperature(--temperature);
            }}><b>-</b></button>
            <p>
                {temperature}°C
            </p>
        </div>
        </div>
                
    </div>

      </div>
      </div>
  );

}
export default Bulb;
