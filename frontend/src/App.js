import React from 'react';
import jwt from 'jsonwebtoken';
import {Provider} from 'react-redux';
import setAuthenticationToken from './redux/action/setAuthenticationToken';
import {setCurrentUser,logout} from './redux';

// import Header from './component/Header'
// import BookContainer from './component/bookContainer';
// import HookBookContainer from './component/HookBookContainer'
import MainContainer from './component/MainContainer'
// import PassCatContainer from './component/passCatContainer'
import store from './redux/store';  
import './App.css';

function App() {
	if(localStorage.jwtToken){
	setAuthenticationToken(localStorage.jwtToken);
	jwt.verify(localStorage.jwtToken,'secret',function(err,decode){
		console.log(decode);
		if(err) {
			store.dispatch(logout()); 
		}
		else{
		store.dispatch(setCurrentUser(decode));
		}
	})		
	}
  return (
    <Provider store={store}>
    <div>
  	<MainContainer/>
    </div>
    </Provider>
  );
}

export default App;
