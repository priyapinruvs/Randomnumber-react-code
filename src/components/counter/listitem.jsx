import { useState } from "react"


function Listitem(props){

    const[checked, setchecked]=useState(false)

const handlechange=()=>{
    setchecked(!checked)
}
    return(
        <div>
        <input type="checkbox" onChange={handlechange} /> 
        <span style={{textDecoration:checked? "line-through":"none"}} >{props.activity} </span>
         </div>
    )
}

export default Listitem