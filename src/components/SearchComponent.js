import { useState,useEffect } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
const SearchComponent=()=>{
    const [qdata]=useSearchParams()
    const [result,setResult]=useState([])
    const email=qdata.get("user")
   
    useEffect(
        ()=>{
            axios.get(`http://localhost:3001/search/${email}`).then((res)=>setResult(res.data)).catch((err)=>console.log(err))
        },[]
    )
    return(
        <div>
       
        <h1>User Details are:</h1>
        
         <h2>Username : {result.username}</h2>
             <h2>Email : {result.email}</h2>
             <h2>Working Since :{result.yoe}</h2>
             <h3>Branch :{result.place}</h3>
             </div>
            
    )
}
export default SearchComponent