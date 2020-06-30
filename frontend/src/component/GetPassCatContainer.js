import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchPassCat,editPassCat,deletePassCat} from '../redux';
import {Button,Table} from 'react-bootstrap'; 

 function GetPassCatContainer(){
 	const user_id=useSelector(state=>state.user.userDetails.userId);
 	
 	const dispatch=useDispatch();

 	useEffect(()=>{
 		dispatch(fetchPassCat(user_id))
 	})
 	const allCategories=useSelector(state=>state.pass.allCategories);

 	if(allCategories){
 		var CatData=allCategories.map((val,i)=>(
 				<tr key={i}>
 				
 				<td>{i+1}</td>
 				<td key={val._id}>{val._id}</td>
 				<td key={i}>{val.password_category}</td>
 				<td><Button className="btn btn-primary" onClick={()=>editCategory(val._id,val.password_category)} >Edit</Button> <Button className="btn btn-danger" onClick={()=>deleteCategory(val._id)}>Delete</Button> </td>
 				</tr>
 			))
 	}
 	else{
 		CatData= <tr>
 				<td colSpan="4">No Records Found</td>
 				</tr>
 	}


 	const editCategory=(id,category)=>{
 		dispatch(editPassCat(id,category))
 	}
 	const deleteCategory=(id)=>{
 		dispatch(deletePassCat(id))
 	}
 	// console.log(allCategories);
 	return (
 		<>
 		<h1>All Password Category</h1>
 		<Table striped bordered hover size="sm">
 		<thead>
 			<tr>
 				<th>#</th>
 				<th>Category ID</th>
 				<th>Category Name</th>
 				<th>Action</th>
 			</tr>
 		</thead>
 		<tbody>
 			{CatData}
 			
 		</tbody>
 		</Table>
 		</>
 		)
 }
 export default GetPassCatContainer;