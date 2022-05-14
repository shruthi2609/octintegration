import { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"
const ListComponent=()=>{
    const [result,setResult]=useState([])
    const [uemail,setUEmail]=useState("")
    const {email}=useParams()
    const navigate=useNavigate()

    useEffect(
        ()=>{
            axios.get(`http://localhost:3001/search/${email}`).then((res)=>setResult(res.data)).catch((err)=>console.log(err))
        },[]
    )
    const handleSearch=(e)=>{
        e.preventDefault()
        navigate(`/searchUser?user=${uemail}`)
    }
    const handleChange=(e)=>{
        setUEmail(e.target.value)
    }
    return(
        <div>
          { console.log(email)}
            <h1>Welcome Back {result.username}</h1>
                    <div>
                    <h2>Username : {result.username}</h2>
                        <h2>Email : {result.email}</h2>
                        <h2>Working Since :{result.yoe}</h2>
                        <h3>Branch :{result.place}</h3>
                        </div>
             Enter the user email:   <input type='text' onChange={handleChange}></input>
                <button onClick={handleSearch}>search users</button>
               
            
        </div>

    )
}
export default ListComponent