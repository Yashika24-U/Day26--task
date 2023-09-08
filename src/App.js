import {BrowserRouter,Routes,Route} from "react-router-dom"
import Main from "./Components/Main";
import Mentor from "./Components/Mentor"
import Student from "./Components/Student"
import ActionStud from "./Components/ActionStud"


 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/student" element = {<Student/>}/>
        <Route path = "/actionstud" element = {<ActionStud/>}/> 
        <Route path = "/actionstud/:id" element = {<ActionStud/>}/>
        <Route path = "/mentor" element = {<Mentor/>}/>


        
        {/* <Route path = "/assign" element = {<Assign/>}/> */}
        {/* <Route path = "/assign/:id" element = {<Assign/>}/> */}
          
      </Routes>
    
    </BrowserRouter>
  );
}


