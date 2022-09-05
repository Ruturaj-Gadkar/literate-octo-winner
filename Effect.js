import {useState,useEffect} from "react"


export default function Effect()
{
    const[count,setCount]=useState(0)
    useEffect(()=>{

        console.log("use effect");
    }) 
    return(
        <div>
            <h1>UseEffect {count}</h1>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}