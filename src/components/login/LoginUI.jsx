import { useState } from "react"

  
const Login=()=>{
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const [newdata,setNewData]=useState([])

const handle=(e)=>{
    e.preventDefault()
    const newuser ={email:email,password:password}
    setNewData([...newdata,newuser])
    console.log(newdata)
}
    return(
        <div>
            <form onSubmit={handle} >
    <label>Email</label>
    <input type="text" placeholder="Login" value={email} autoComplete="off" onChange={(e)=>setEmail(e.target.value)}/>
    
    <label>Password</label>
    <input type="password" placeholder="password" value={password} autoComplete="off" onChange={(e)=>setPassword(e.target.value)}/>
    <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login