import { useState } from "react";

function Randomnumber(){

  let[randomnumber,setrandomnumber]=useState(0)

  function number(){
    let numberk= Math.random()*10
    setrandomnumber(Math.floor(numberk)+1)
 
  }
  return(
    <div>
      <h1>{randomnumber}</h1>
      <button onClick={number}>Randomnumber</button>
    </div>
  )
}

export default Randomnumber