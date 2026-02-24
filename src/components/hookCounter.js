import React,{useState} from "react";
function Hookcounter(){

     const initalcount=0;
   const [count,setcount]= useState(initalcount)
   const increment=()=>{ for(let i=0;i<5;i++)
   {setcount(prevcount=>prevcount+1)}
   }
return(
<div>
count:{count}
<button onClick={()=>setcount(initalcount)}>Reset</button>
<button onClick={()=>setcount(prevcount=>prevcount+1)}>Increment by 1</button>
<button onClick={()=>setcount(prevcount=>prevcount-1)}>decrement by 1</button>
<button onClick={increment}>increment by 5</button>
</div>
);
}
export default Hookcounter;