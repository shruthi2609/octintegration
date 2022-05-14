import {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const LoginPage=()=>{
    const [useremail,setEmail]=useState("")
    const [userpassword,setPassword]=useState("")
    const [msg,setMsg]=useState("")
    const [status,setStatus]=useState(false)
    const navigate=useNavigate()
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        const url="http://localhost:3001/login"
        axios.post(url,
        {"email":useremail,"password":userpassword}).then((res)=>{
            setMsg(res.data.msg)
            setStatus(res.data.status)
        }).catch((err)=>console.log(err))
    }
    return(
        <div>
                  {console.log(useremail)}
            <form>
        UserName:<input type="text" placeholder="enter email" onChange={handleEmail}></input>
        Password:<input type="text" placeholder="enter password" onChange={handlePassword}></input>
            </form>
            <button onClick={handleLogin}>Login</button>
            {
               
               status?navigate(`/dashboard/${useremail}`):<h2>{msg}</h2>
            }
        </div>
    )
}
export default LoginPage;