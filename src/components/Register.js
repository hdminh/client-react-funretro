import React, { Component } from 'react'
import { signUp } from '../utils/api'
import { Form, Button, Container, Nav } from 'react-bootstrap'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    

    handleSubmit(event) {
        console.log(this.state.name)
        console.log(this.state.email)
        console.log(this.state.password)
        signUp(this.state.name, this.state.email, this.state.password)
        .then(function (res){
            console.log(res)
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', res.config.data);
            window.location.replace('/');
        }).catch(function (err){
            console.log(err)
        })
        event.preventDefault();
    }
    render() {
        return (
            <Container style={{ marginTop: '100px' }}>
                <Form>
                    <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" name="name" value={this.state.name} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="email" value={this.state.email} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Register
                    </Button>
                </Form>
                <Nav.Link href="/login">Already have an account?</Nav.Link>
            </Container>
        )
    }
}
