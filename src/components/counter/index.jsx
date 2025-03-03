import { useState } from "react";

function Counter(){
    let [count, setcount]=useState(0)

function increment(){
    setcount(count+1)
}
function decrement(){
    setcount(count-1)
}
return(
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
)

}

export default Counter