import axios from "axios";

const BASE_URL = "http://localhost:4500";
const EMPLOYEE = "/employees";


const getEmployeeList = () => {
    return axios.get(BASE_URL + EMPLOYEE);
  };
  
  const addEmployee = (newEmployee) => {
    return axios.post(BASE_URL + EMPLOYEE, newEmployee);
  };
  

  const Employeeservice = { getEmployeeList, addEmployee };
export default Employeeservice;