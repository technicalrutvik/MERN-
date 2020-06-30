import React from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import LoginContainer from './LoginContainer'
import Header from './Header'
import PassCatContainer from './passCatContainer'
import SignUpContainer from './SignUpContainer'



function MainContainer(props){
	const isLoggedIn=useSelector(state=>state.user.isLoggedIn);
	if(isLoggedIn===false){
		var callContainer=<><Route path exact ='/' component={LoginContainer}/> <Route path='/signup' component={SignUpContainer}/> </>
	}
	else{
		callContainer=<><Header/><Route exact path='/' component={PassCatContainer}/></>
	}

	return(
		<Router>
		{callContainer}
		</Router>
		)
}

/// /const mapStatetoProps=(state)=>{
// 	return{
// 	isLoggedIn:state.user.isLoggedIn,
// 	msg:state.pass.msg
// }
// }
// const mapStatetoDispatch=(dispatch)=>{
// 	return {
		
// 	}
// }
export default MainContainer; 

