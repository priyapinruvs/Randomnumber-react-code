import { useState } from "react"

function Login(){

const [name,setname]= useState("")
const[pass,setpass]=useState("")
const[login,setlogin]=useState(false)

const handlename=(event)=>
    {
    setname(event.target.value)
}

const handlepss=(event)=>{
    setpass(event.target.value)
}

const handlelogin=()=>{

    let tname="Priya"
    let tpass="P123"

    if(tname===name && tpass===pass)
        {
        setlogin(true)
        console.log("Success")
    }
    
 
}

return(
    <>
    <h1>Login</h1>
    {
    login?<h1>Login Successful</h1>: <div>
    <input  value={name}  onChange={handlename} type="text" placeholder="Enter Your Name" /> <br/>
    <input value={pass} onChange={handlepss} type="text"  placeholder="Enter Your Password" /> <br/>
    <button onClick={handlelogin}>Login</button>
</div>
     } 
    
    </>
)

}
export default Login