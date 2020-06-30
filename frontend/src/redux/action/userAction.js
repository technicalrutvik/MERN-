import {SIGNUP_USER,LOGIN_USER,SET_CURRENT_USER,LOGOUT_USER} from './userType';
import setAuthenticationToken from './setAuthenticationToken';
import jwt from 'jsonwebtoken';

const axios =require('axios');

export const signupUser=(username,email,password,cpassword)=>{
		
		return function(dispatch){
			var OPTIONS = {
			  url: "http://localhost:5000/userApi/signup",
			  method: "POST",
			  data:{
				    username:username,
				    email:email,
				    password:password,
				    cpassword:cpassword
			  },
			  headers: {
			    // Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJ1dHZpayIsInVzZXJJZCI6IjVlYzc2OTY3M2ExOTk1Mjc3NDgyNzRmMiIsImlhdCI6MTU5MzA2MDYzMSwiZXhwIjoxNTkzMDg5NDMxfQ.JUi9hgu16Cyc1C1xb27fNfqsAX39RuNHMGXS3gjN0XQ",
			    "Content-Type": "application/json",
			  },
			};
			axios(OPTIONS)
			.then(res=>{
			const message=res.data.message;
			dispatch({
				type:SIGNUP_USER,
			payload:message
			})
			})
			.catch(err=>{
				console.log(err)
			})
}
}


export const loginUser=(username,password)=>{
		
		return function(dispatch){
			var OPTIONS = {
			  url: "http://localhost:5000/userApi/login",
			  method: "POST",
			  data:{
				    username:username,
				    password:password
				    
			  },
			  headers: {
			    // Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJ1dHZpayIsInVzZXJJZCI6IjVlYzc2OTY3M2ExOTk1Mjc3NDgyNzRmMiIsImlhdCI6MTU5MzA2MDYzMSwiZXhwIjoxNTkzMDg5NDMxfQ.JUi9hgu16Cyc1C1xb27fNfqsAX39RuNHMGXS3gjN0XQ",
			    "Content-Type": "application/json",
			  },
			};
			axios(OPTIONS)
			.then(res=>{
			const message=res.data.message;
			
			if(message==='User Found'){
			
				const token=res.data.token;
				localStorage.setItem('jwtToken',token);
				setAuthenticationToken(token);
				dispatch(setCurrentUser(jwt.decode(token))); 
				dispatch({
				type:LOGIN_USER,
				isLoggedIn:true,
				payload:message
			})
			}
			else{
				dispatch({
				type:LOGIN_USER,
				isLoggedIn:false,
				payload:message
			})
			}
			
			})
			.catch(err=>{
				console.log(err)
			})
}
}

export const setCurrentUser=(user)=>{
	return {
		type:SET_CURRENT_USER,
		payload:user
	}
}

export const logout=()=>{
		
		return function(dispatch){
			localStorage.removeItem('jwtToken');
			setAuthenticationToken(false);
			dispatch(setCurrentUser({}));

			dispatch({
				type:LOGOUT_USER
			})
			window.location.href='/';
		}
}