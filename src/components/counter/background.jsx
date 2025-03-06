import { useState } from "react"

function Background(){
     
    const [color, setcolor]=useState(true)

    const handlechange=()=>{
        setcolor(!color)
    }

    return(
        <>
        <div style={{ background: color?"red":"blue", height:"100px", width:"100px"}}> </div>
        <br/>
        <button onClick={handlechange} >change</button>
        
        </>
    )
}

export default Background