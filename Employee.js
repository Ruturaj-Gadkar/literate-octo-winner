
 import React, { useEffect, useState } from "react";
 import Employeeservice from "./EmployeeService";
 import EmployeeDetail from "./EmployeeDetail";
 export default function Employee() {
   const [employeeList, setEmployeeList] = useState([]);
 
   useEffect(() => {
    Employeeservice.getEmployeeList()
       .then((response) => {
         console.log(response);
         if (response) {
            setEmployeeList(response.data);
         }
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);
 
    return (
     <div>
            Employee:   {employeeList.length}
      
      <div>
          {
              employeeList.map((employee)=>{

                return <EmployeeDetail Employee={employee} />
              })
          }
      </div>

      </div>
  );
 }
 



