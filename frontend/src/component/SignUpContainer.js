import React,{useState} from 'react';
import {Button,Container,Row,Col,Form} from 'react-bootstrap'; 
import {signupUser} from '../redux'
import {connect} from 'react-redux';

function SignUpContainer(props){
	const [username,setUsername]=useState('');
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const [cpassword,setCpassword]=useState('');

	
	return(
		<Container>
		<Row>

		


		<Col>
		<h1>Sign Up </h1>
		<Form className="form">
			<p>{props.msg}</p>
		  <Form.Group controlId="formCategory">
		    <Form.Label>Username</Form.Label>
		    <Form.Control type="text" defaultValue={props.username} onChange={(e)=>setUsername(e.target.value)} />
		  </Form.Group>

		  <Form.Group controlId="formCategory1">
		    <Form.Label>Email</Form.Label>
		    <Form.Control type="email" defaultValue={props.email} onChange={(e)=>setEmail(e.target.value)} />
		  </Form.Group>

		  <Form.Group controlId="formCategory2">
		    <Form.Label>Password</Form.Label>
		    <Form.Control type="password" defaultValue={props.password} onChange={(e)=>setPassword(e.target.value)} />
		  </Form.Group>

		  <Form.Group controlId="formCategory3">
		    <Form.Label>Confirmed Password</Form.Label>
		    <Form.Control type="password" defaultValue={props.cpassword} onChange={(e)=>setCpassword(e.target.value)} />
		  </Form.Group>
		  <p>Already have Account <a href='/'>Login Here</a></p>

		   <Button variant="primary" onClick={()=>{props.signupUser(username,email,password,cpassword)}}>Sign Up</Button>
		   </Form>
		</Col>

		<Col>

		</Col>

		</Row>
		</Container>
		)
}


const mapStatetoProps=(state)=>{
	return{
	username:state.user.username,
	password:state.user.password,
	cpassword:state.user.cpassword,
	msg:state.user.msg

}
}
const mapStatetoDispatch=(dispatch)=>{
	return {
		signupUser:function(username,email,password,cpassword){
			dispatch(signupUser(username,email,password,cpassword));
		},

	}
}
export default connect(mapStatetoProps,mapStatetoDispatch)(SignUpContainer); 


