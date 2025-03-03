import { useState } from "react";

function Changename(){

  let [myname, setmyname]=useState("Priya")
  function change(){
    setmyname("Gopriya")
  }
  return(
    <div>
      <h1>{myname}</h1>
      <button onClick={change}>change</button>
    </div>
  )
}

export default Changename;