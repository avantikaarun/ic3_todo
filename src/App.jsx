import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useForm } from "react-hook-form";
import Form from"./form.jsx"

export default function App() {
  const { register, handleSubmit } = useForm();
  const[todo,setTodo ]= useState([]);
  const getData = async () =>{
    const data=await fetch('https://jsonplaceholder.typicode.com/todos');
    const jsonData = await data.json();
    setTodo(jsonData)
  }

  useEffect(()=>{
    getData();
  },[])
  
  return (
    <div>
      <Container>
        <Form></Form>

        <h1>TO DO LIST</h1>
        <Table striped bordered hover>
      <thead>
      <tr>
              <th>#</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed ? 'Yes' : 'No'}</td>
                <td>
                  <input type="checkbox" checked={item.completed} />
                </td>

                </tr>
                ))}
                </tbody>
     
    </Table>
    
      </Container>
    </div>
  )
}
