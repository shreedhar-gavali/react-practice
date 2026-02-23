import React,{useState} from 'react';

function Text(){
const [Text, setText] =useState("click");

return(
     <div>
<h2>{Text}</h2>
    <button onClick={()=>setText("textChanged")}>click</button>
</div> 
)
}

export default Text;