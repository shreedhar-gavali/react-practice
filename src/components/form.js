import React,{useState} from "react";

function Form(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
   const rowStyle={display:"flex",
     alignItems:"center" , gap:"10px",padding:"10px" , 
      backgroundColor:"powderblue" , marginBottom: "10px"};

   return( <div style={rowStyle}> 

<div className="Name" style={{ padding:"10px", margin:"10px",padding:"20px",backgroundColor:"#f1f1f1" }}>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
</div>
<div className="Email" style={{padding:"10px", margin:"10px",padding:"20px",backgroundColor:"#f1f1f1"}}>
    <label htmlFor="e-mail">E-mail</label>
    <input type="email" id="e-mail" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
</div>

<div style={{}} >
    <label >Gender:</label>
</div>

< div className="genderCategary"style={{padding:"10px", margin:"10px",padding:"20px",backgroundColor:"#f1f1f1"}}>
<label htmlFor="male">Male</label>
<input id="male" type="radio" name="gender"></input>
<label htmlFor="female">Female</label>
<input id="female" type="radio" name="gender"></input>
</div>

</div>);
}

export default Form;