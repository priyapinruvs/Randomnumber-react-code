import { useState } from "react"

const Shoppinglist=()=>
    {

const [mylist, setmylist]=useState(["Shirt","T-shirt","Kurtas","Pants","Fruits"])

const [item, setitem]=useState("")

const Changeitem=(evt)=>   
{
    setitem(evt.target.value)
}

const addlist=()=>
    {
    setmylist([...mylist,item])
    setitem("")
}
    return(
        <>
        <input type="text" value={item} onChange={Changeitem} />
        <button onClick={addlist}>Add</button>
       <ul>
        {mylist.map(function(item){
            return <li>{item}</li>
             }
            )
             }
       </ul>       
        
        </>
    )
}

export default Shoppinglist