import React, { useState } from "react";

function Counter(){
    const[count,setCount]=useState(0)
    return( <div>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>increment</button> <br/>
        <button onDoubleClick={()=>setCount(count-1)}>decrement</button>   
</div>
    )  
}
export default Counter;