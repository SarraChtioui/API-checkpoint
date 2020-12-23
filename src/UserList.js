import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
function UserList() {
const [listOfUSer, setListOfUser]=useState([])

useEffect(() =>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(Response => setListOfUser(Response.data))
}, [])


  return (
    <div>
      <Table striped bordered hover variant="dark">
      <thead>
    <tr>
      <th>id</th>
      <th>username</th>
      <th>name</th>
      <th>email</th>
      <th>phone</th>
      <th>website</th>
    </tr>
  </thead>
      {
        listOfUSer.map(
          el => {
            return(
<tbody>
    <tr>
      <td>{el.id}</td>
      <td>{el.username}</td>
      <td>{el.name}</td>
      <td>{el.email}</td>
      <td>{el.phone}</td>
      <td>{el.website}</td>

    </tr>
  </tbody>
  
            )
          }
        )

      }
      </Table>
    </div>
  )
}

export default UserList
