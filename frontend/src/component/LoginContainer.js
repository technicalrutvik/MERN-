import React,{useState} from 'react';
import {Button,Container,Row,Col,Form} from 'react-bootstrap'; 
import {loginUser} from '../redux'
import {connect} from 'react-redux';

function LoginContainer(props){
	const [username,setUsername]=useState('');
	const [password,setPassword]=useState('');


	
	return(
		<Container>
		<Row>

		

		<Col>

		<h1>Login </h1>
		<Form className="form">
			
		  <Form.Group controlId="formCategory">
		    <Form.Label>Username</Form.Label>
		    <Form.Control type="text" defaultValue={props.username} onChange={(e)=>setUsername(e.target.value)} />
		  </Form.Group>

		  <Form.Group controlId="formCategory2">
		    <Form.Label>Password</Form.Label>
		    <Form.Control type="password" defaultValue={props.password} onChange={(e)=>setPassword(e.target.value)} />
		  </Form.Group>
		  <p><a href='/signup/'>Create New Account</a></p>
		   <Button variant="primary" onClick={()=>{props.loginUser(username,password)}}>Login</Button>
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
	category:state.user.username,
	password:state.user.password,
	msg:state.user.msg

}
}
const mapStatetoDispatch=(dispatch)=>{
	return {
		loginUser:function(username,password){
			dispatch(loginUser(username,password));
		}
	}
}
export default connect(mapStatetoProps,mapStatetoDispatch)(LoginContainer); 


