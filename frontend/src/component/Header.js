import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'; 
import {connect} from 'react-redux';
import {Link,Route} from 'react-router-dom';
import {logout} from '../redux';
import UserProfile from './UserProfile';
 function Header(props){
  
  return (
    <>
    
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Password Managment Sysyem</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

      <Link to="/" className='nav-link'>Home</Link>

      <NavDropdown title="Password" id="basic-nav-dropdown">  
      <Link to="#" className="dropdown-item" role="button">Add New Password </Link>
      <Link to="#" className="dropdown-item" role="button"> View All Password </Link>
      </NavDropdown>

      <NavDropdown title={props.userDetails.username} id="basic-nav-dropdown">  
      <Link to="/userprofile" className="dropdown-item" role="button"> View Profile </Link>
      <Link to="#" onClick={()=>{props.logoutUser()}} className="dropdown-item" role="button"> Logout </Link>
      </NavDropdown>
      

    </Nav>
   
  </Navbar.Collapse>
</Navbar>
  
  <Route path='/userprofile/' component={UserProfile}/>

    </>
    )
 }

const mapStatetoProps=(state)=>{
  return{
  userDetails:state.user.userDetails,
}
}

const mapStatetoDispatch=(dispatch)=>{
  return {
    logoutUser:function(){
      dispatch(logout());
    }
  }
}

export default connect(mapStatetoProps,mapStatetoDispatch)(Header); 
































