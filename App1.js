
import {Table} from "react-bootstrap";
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar";
import {BrowserRouter, Route,Routes,Link} from "react-router-dom";
import Page404 from "./Page404"
import User from "./Params/User"
import Contact from "./Contact"
import Filter from "./Filter"

function App() {

  
 return(
    <div >
     
      <BrowserRouter>
     <Navbar/>
       <Routes>
         <Route path="/" element={< Home/>}/>
         <Route path="/about" element={< About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/filter" element={<Filter/>} />
         <Route path="/user/:name" element={<User/>}/> 
         <Route path="/*"  element={<Page404/>}/>
         
       
       </Routes>
      </BrowserRouter>

      </div>
  );
}

export default App;
