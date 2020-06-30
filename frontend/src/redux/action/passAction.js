import {ADD_PASSCAT,FETCH_PASSCAT,EDIT_PASSCAT,UPDATE_PASSCAT,DELETE_PASSCAT} from './passType';
const axios =require('axios');
export const addPassCat=(category,user_id)=>{
		
			var OPTIONS = {
			  url: "http://localhost:5000/api/add-category/",
			  method: "POST",
			  data:{passwordCategory:category,user_id:user_id},
			  headers: {
			    // Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJ1dHZpayIsInVzZXJJZCI6IjVlYzc2OTY3M2ExOTk1Mjc3NDgyNzRmMiIsImlhdCI6MTU5MzE1NDA0NCwiZXhwIjoxNTkzMTgyODQ0fQ.s2TkXVo-E5j5qv4zh2eIcq0y8PkIrBroc9oDNt8P4RE",
			    "Content-Type": "application/json",
			  },
			};
			axios(OPTIONS)
			.then(res=>{
				console.log(res); 
			})
			.catch(err=>{
				console.log(err)
			})

		return {
			type:ADD_PASSCAT,
			payload:category
		}
}


export const fetchPassCat=(user_id)=>{
	// console.log(user_id)
	return function(dispatch){

		// axios.post('http://localhost:5000/add-new-category/add',{passwordCategory:category}){
		
			var OPTIONS = {
			  url: "http://localhost:5000/api/get-category/"+user_id,
			  method: "GET",

			  headers: {
			    // Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJ1dHZpayIsInVzZXJJZCI6IjVlYzc2OTY3M2ExOTk1Mjc3NDgyNzRmMiIsImlhdCI6MTU5MzE1NDA0NCwiZXhwIjoxNTkzMTgyODQ0fQ.s2TkXVo-E5j5qv4zh2eIcq0y8PkIrBroc9oDNt8P4RE",
			    "Content-Type": "application/json",
			  },
			};
			axios(OPTIONS)
			.then(res=>{
				const categories=res.data.result;
				// console.log(categories);
				dispatch(getPassCat(categories)); 
			})
			.catch(err=>{
				console.log(err)
			})
	

}
}
export const getPassCat=(categories)=>{
		return{
		type:FETCH_PASSCAT,
		payload:categories
	}
}
export const editPassCat=(id,categories)=>{
		return{
		type:EDIT_PASSCAT,
		payload:categories,
		id:id
	}
}
export const updatePassCat=(id,categories)=>{
		
		var OPTIONS = {
			  url: "http://localhost:5000/api/update-category/",
			  method: "PATCH",
			  data:{_id:id,passwordCategory:categories},
			  headers: {
			    // Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJ1dHZpayIsInVzZXJJZCI6IjVlYzc2OTY3M2ExOTk1Mjc3NDgyNzRmMiIsImlhdCI6MTU5MzE1NDA0NCwiZXhwIjoxNTkzMTgyODQ0fQ.s2TkXVo-E5j5qv4zh2eIcq0y8PkIrBroc9oDNt8P4RE",
			    "Content-Type": "application/json",
			  },
			};
			axios(OPTIONS)
			.then(res=>{
				console.log(res); 
			})
			.catch(err=>{
				console.log(err)
			})

		return{
		type:UPDATE_PASSCAT,
		payload:categories,
	}
}

export const deletePassCat=(id)=>{
		
		var OPTIONS = {
			  url: "http://localhost:5000/api/delete-category/",
			  method: "DELETE",
			  data:{cat_id:id},
			  headers: {
			    // Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJ1dHZpayIsInVzZXJJZCI6IjVlYzc2OTY3M2ExOTk1Mjc3NDgyNzRmMiIsImlhdCI6MTU5MzE1NDA0NCwiZXhwIjoxNTkzMTgyODQ0fQ.s2TkXVo-E5j5qv4zh2eIcq0y8PkIrBroc9oDNt8P4RE",
			    "Content-Type": "application/json",
			  },
			};
			axios(OPTIONS)
			.then(res=>{
				console.log(res); 
			})
			.catch(err=>{
				console.log(err)
			})

		return{
		type:DELETE_PASSCAT,
		payload:id,
	}
}