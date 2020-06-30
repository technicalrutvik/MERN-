// import React,{useState} from 'react';
// import {buyBook} from '../redux'
// import {connect} from 'react-redux';
// function BookContainer(props){
// 	const[number,setNumber]=useState(1)
// 	return(
// 		<>
// 		<h1>Number Of Book- {props.numberOfBooks}</h1>
// 		<input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
// 		<button onClick={()=>{props.buyBook(number)}}>Buy {number} Book</button>
// 		</>
// 		)
// }

// const mapStatetoProps=(state)=>{
// 	return{
// 	numberOfBooks:state.numberOfBooks}
// }
// const mapStatetoDispatch=(dispatch)=>{
// 	return {
// 		buyBook:function(number){
// 			dispatch(buyBook(number));
// 		}
// 	}
// }
// export default connect(mapStatetoProps,mapStatetoDispatch)(BookContainer); 

