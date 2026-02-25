import React,{useState} from "react";

function Form(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
   const rowStyle={display:"flex",
     alignItems:"center" , gap:"10px",padding:"10px" , 
      backgroundColor:"powderblue" , marginBottom: "10px"};

   return( <div> 
    <div style={{display:"flex", padding:"10px", }}>
    <div className="Name" style={rowStyle}>
    <label htmlFor="name">Name:</label>
<input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
</div>
<div className="Email" style={rowStyle}>
<label htmlFor="e-mail">E-mail</label>
<input type="email" id="e-mail" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
</div>
</div>
<div >
    <label style={rowStyle}>Gender:</label>
</div>

< div className="genderCategary"style={rowStyle}>
<label htmlFor="male">Male</label>
<input id="male" type="radio" name="gender"></input>
<label htmlFor="female">Female</label>
<input id="female" type="radio" name="gender"></input>
</div>

</div>);
}

export default Form;