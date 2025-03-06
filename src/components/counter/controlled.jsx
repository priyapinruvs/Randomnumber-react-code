import { useState } from "react"
import Resultcomp from "./result"

function Formcomp()
{
const [fname,setfname]=useState("")
const[lname,setlname]=useState("")
const [result, setresult]=useState("result")

const handlefname=(evt)=>{
    setfname(evt.target.value)
}
const handlelname=(evt)=>{
    setlname(evt.target.value)
}

const handleresult=(evt)=>
    { evt.preventDefault()
    setresult(fname+lname)
}

    return(
        <div>
            <input type="text" value={fname} onChange={handlefname}/>
            <br />
            <input type="text" value={lname} onChange={handlelname} />
            <br />
            <input type="submit" onClick={handleresult} />
            <Resultcomp result={result} />
        </div>
    )
}
export default Formcomp