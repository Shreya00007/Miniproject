import React, { useState } from 'react';

function Login()
{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const[email,setEmail]=useState("");
   
function SignUp()
{
    
    console.warn()
}
    return (
        <div className="col-sm-6 offset-sm-3">
        <h1>User Login</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}className="form-control" />
        <br/>
        <input type="text"value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" />
        <br/>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" />
        <br/>
        <button onClick={SignUp} className="btn btn-primary">Login</button>

        </div>
    )
}

export default Login;