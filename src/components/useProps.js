import React from 'react';
 const Name=(props)=> { 
   return  <div> <h5>Hii,  {props.fname} also known as {props.lname}</h5>
   {props.children}
            </div>
}  

 export default Name;