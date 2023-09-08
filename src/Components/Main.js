import {Container,Navbar,NavbarToggler,Nav,Collapse,Button} from "reactstrap"
import { React , useState } from "react";
import {useNavigate } from "react-router-dom";
export default function Main()
{
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const nav = useNavigate()
return(
    <Container>

        <h2 className="text-center">Student Mentor Management</h2>

        <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="me-2" /> 
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>     
           <Button className = "mt-4" color = "primary" block  onClick = {()=>nav("/student")}>Student</Button>
           <Button  color = "primary" block onClick = {()=>nav("/mentor")}>Mentor</Button> 
           {/* <Button  color = "primary" block onClick = {()=>nav("/assign/:id")}>Assign Student</Button> */}
          </Nav>
        </Collapse>
      </Navbar>

    </Container>

    )
}