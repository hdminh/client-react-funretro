import React,  { useState, useEffect } from 'react'
import InputContainer from './Input/InputContainer'
import { getBoards } from '../utils/api'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        getBoards().then((res) => {
            console.log(res.data.data)    
            setData(res.data.data)
        })
    }
    
    return (
        <Container style={{ marginTop: '100px' }}>
            <InputContainer type="board" setData={setData}/>
<Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
            {data.map((board) => {
               return (
                <tr key={board._id}>
                    <td>{board.title}</td>
                   <td>{board.created}</td>
                   <td><Button>Edit</Button></td>
                </tr>
               );
            })}
        </tbody>
        </Table>
        </Container>
        
    )
}
