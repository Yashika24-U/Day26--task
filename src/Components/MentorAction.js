
import { FormGroup,Label,Input,Container, Button } from "reactstrap"
import { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom";
export default function MentorAction()
{
const{id} = useParams();
const nav = useNavigate();
const [formData,setFormData] = useState({
    name:"",
    class:"",
    Percentage:""
});
useEffect(()=>{
    if(id)
     fetch('https://64befda55ee688b6250d1598.mockapi.io/Products/'+ id)
     .then((data)=>data.json())
     .then((res)=>setFormData(res))
},[id]);


const handleChange = (e)=>{
    console.log(e.target.value)
    setFormData({...formData,[e.target.name]: e.target.value})    
}
const handleSubmit = ()=>{
    fetch('https://64befda55ee688b6250d1598.mockapi.io/Products' ,{
     method : "POST",
     headers : {
        "Content-type":"application/json",
     },
     body : JSON.stringify(formData)  
    })
    .then((data)=>data.json())
    .then(()=>nav("/student"))
} 
return(
    <Container className="mt-4">
        <h1 className="text-center">{id ? "Edit Student" :"Create Student" } </h1>
        <FormGroup >
            <Label>Name</Label>
            <Input onChange = {handleChange} placeholder="enter Name" name="name" value ={formData.name} />
        </FormGroup>
        <FormGroup>
            <Label>Class</Label>
            
            <Input onChange = {handleChange} placeholder="enter Class" name = "class" value =  {formData.class} />
        </FormGroup>
        <FormGroup>
            <Label>Percentage</Label>
            <Input onChange = {handleChange} placeholder="enter Percentage" name = "Percentage" value = {formData.Percentage}/>
        </FormGroup>
         <Button color = "primary" block onClick= {handleSubmit} >Submit</Button> 
        <Button color = "danger"  className="mt-4" block onClick = {()=>nav("/student")}>Cancel</Button>
    </Container>
        
    )
}