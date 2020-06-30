import React from 'react';
import {Button,Container,Row,Col,Form} from 'react-bootstrap'; 
import {connect} from 'react-redux';
import DefaultPic from '../uploads/avatar.jpg'
const axios =require('axios');
class UserProfile extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			user_id:this.props.user_id,
			username:this.props.username,
			email:this.props.email,
			profileImage:this.props.profileImage,
			msg:this.props.msg,
			uploadedFile:null
		}
	}

	fetchUserDetails=(user_id)=>{
		// console.log(user_id);
		axios.get("http://localhost:5000/userApi/getUserDetails/"+user_id,{
			headers: {
			    "Content-Type": "application/json",
			  },
			})
			.then(res=>{
				this.setState({email:res.data.result[0].email})

				this.setState({profileImage:res.data.result[0].profileImage})


				console.log(res.data);
			})
			.catch(err=>{console.log(err)})
	}

	changeProfileImage=(event)=>{
		// console.log(event.target.files[0])
		this.setState({uploadedFile:event.target.files[0]})
	}

	updateProfileHandler=(e)=>{
		e.preventDefault();
		const formdata=new FormData();
		formdata.append('profileImage',this.state.uploadedFile);
		formdata.append('user_id',this.state.user_id);

		axios.post("http://localhost:5000/userApi/updateProfile/",formdata,{
			headers: {
			    "Content-Type": "application/json",
			  },
			})
			.then(res=>{
				this.setState({msg:res.data.message});
				this.setState({profileImage:res.data.result.profileImage})


				// console.log(res);
			})
			.catch(err=>console.log(err))
	}
///updateProfile/
	componentDidMount(){
		this.fetchUserDetails(this.state.user_id)
	}

	render(){
	
		if(this.state.profileImage){
			var imagestr=this.state.profileImage;
			imagestr=imagestr.replace("public","");
			var profilePic="http://localhost:5000"+imagestr;
		}else{
			profilePic=DefaultPic;
		}

	return(
		<Container>
		<Row>

		<Col>
		<img src ={profilePic} width="500px" alt="profilepic"/>
		</Col>

		<Col>
		<h1> User Profile</h1>
		<Form className="form">
			<p>{this.state.msg}</p>
		  <Form.Group controlId="formCategory">
		    <Form.Label>Username</Form.Label>
		    <Form.Control type="text" defaultValue={this.state.username}/>
		  </Form.Group>

		  <Form.Group controlId="formCategory1">
		    <Form.Label>Email</Form.Label>
		    <Form.Control type="email" defaultValue={this.state.email}/>
		  </Form.Group>

		  <Form.Group controlId="formCategory3">
		    <Form.Label> Profile Image </Form.Label>
		    <Form.Control type="file" name="profileImage" onChange={this.changeProfileImage}/>
		  </Form.Group>

		   <Button variant="primary" onClick={this.updateProfileHandler}> Update Profile </Button>
		   </Form>
		</Col>

		

		</Row>
		</Container>
		)
}
}

const mapStatetoProps=(state)=>{
	return{
	user_id:state.user.userDetails.userId,	
	username:state.user.userDetails.username,
	email:state.user.email,
	profileImage:state.user.profileImage,
	msg:state.user.msg

}
}

export default connect(mapStatetoProps)(UserProfile); 


