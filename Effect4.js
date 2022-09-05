import{useEffect} from "react";

export default function Effect3(props)
{

   useEffect(()=>{

    console.log("use effect");
   },[props.count])
    return(
        <div>
            <h1> count :{props.data} </h1>
            <h1> count : {props.count}</h1>
            
        </div>
    )
}