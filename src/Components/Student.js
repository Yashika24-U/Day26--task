import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Container,Table} from "reactstrap"

export default function Student()
{
    const nav = useNavigate();
    const [data,setData] = useState([])
    const[isDelete,setIsDelete] = useState(false)

    // const getData = ()=>{
    // fetch('https://64befda55ee688b6250d1598.mockapi.io/')
    // .then((data)=>data.json())
    // .then((res)=>setData(res))
    // }

    useEffect(()=>{
            fetch('https://64befda55ee688b6250d1598.mockapi.io/Products')
            .then((data)=>data.json())
            .then((res)=>setData(res))
    },[isDelete])

    const handleDelete = (id)=>{
        fetch('https://64befda55ee688b6250d1598.mockapi.io/Products/' + id,{
        method :"DELETE"
        }).then((data)=>data.json())
        .then((res)=>setIsDelete(!isDelete));
        
    }

return(
    <Container>
        <Button color = "primary" onClick = {()=>{nav("/actionstud")}}>Create Student</Button>
        <Table>
        <thead>
          <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>Class</th>
            <th>Percentage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value,index)=>{
              return (<tr key = {index}>
                <td>{index+1}</td>
                <td>{value.name}</td> 
                <td>{value.class}</td>
                <td>{value.Percentage}</td> 
                <td><Button color = 'warning' onClick = {()=>nav("/actionstud/" + value.id)}>Edit</Button> 
                <Button color = 'danger'  onClick = {()=>{handleDelete(value.id)}}>Delete</Button>
                </td>
              </tr>
           ) })
          }
          </tbody>
</Table>
</Container>
    );
        }
    