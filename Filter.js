import { useSearchParams } from "react-router-dom";

function Filter()
 {

    const [searchparams,setSearchParam]=useSearchParams();
    console.log(searchparams.get("age"))
    console.log(searchparams.get("city"))
    const age=searchparams.get("age")
    const city=searchparams.get("city")
    return(
        <div>
      <h1>Filter</h1>
       <h3>age is:{age}</h3>
       <h3>City is:{city}</h3>
       <input type="text" onChange={(e)=>setSearchParam({city:e.target.value,age:28})}/>
       <button onClick={()=>setSearchParam({age:28})}> Click </button>
        </div>
    )
 }

 export default Filter;