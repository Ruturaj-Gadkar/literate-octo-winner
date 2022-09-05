import {useState,useEffect} from "react";

export default function Effect3()
{
    const[data,setData]=useState(10);
    const[count,setCount]=useState(100);
    useEffect(()=>{

        console.log("use Effect")
    },[data])

    useEffect(()=>{

        console.log("useeeeeee Effect")
    },[count])
    return(
        <div>
            <h1> count :{data} </h1>
            <h1> count : {count}</h1>
            <button onClick={()=>setData(data+1)}>update Data</button>
            <button onClick={()=>setCount(count+1)}>update count</button>
        </div>
    )
}