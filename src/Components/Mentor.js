import React, { useState,useEffect } from 'react'
import {Container,Table,Button} from "reactstrap"
import { useNavigate } from 'react-router-dom'

export default function Mentor() {
const nav = useNavigate();
  
const [state,setState] = useState([])

useEffect(()=>{
  output();
},[])

 async function output(){
    const req = await fetch('https://64befda55ee688b6250d1598.mockapi.io/Products')
    let result  = await req.json()
    setState(result)
     console.log(result)
 }





return(
  <Container>

    <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
  <tbody>
    {/* chainning is done to prevent unexpected breakouts(bugs) in code*/}
    {state.length != 0 && state.map((ele , i)=>{
        return(
          <tr key = {i}>
            <td>{ele.name}</td>
            <td>
              <Button color = "warning">Edit</Button>
              <Button color = "danger">Delete</Button>
            </td>
          </tr>
        )
    }) }
    </tbody>
    
</Table>
</Container>
)  
  
}

//onClick = {()=>{handleDelete(value.id)}}
//onClick = {()=>nav("/actionstud/" + value.id)}