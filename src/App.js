import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from "./components/Home"
import RestaurantUpdate from "./components/RestaurantUpdate"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantDetail from "./components/RestaurantDetail"
import RestaurantSearch from "./components/RestaurantSearch"
import RestaurantList from "./components/RestaurantList"
function App() {
  return (
    <div className="App">   
        
    <Router>


    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"> <Link  to={"/"}>Home</Link></Nav.Link>
        <Nav.Link href="#link"><Link to={"/list"}>List</Link> </Nav.Link>
        <Nav.Link href="#link"><Link  to={"/create"}>Create</Link></Nav.Link>
        <Nav.Link href="#link"><Link  to={"/search"}>Search</Link> </Nav.Link>
        <Nav.Link href="#link"><Link  to={"/details"}>Detail</Link> </Nav.Link>
        {/*<Nav.Link href="#link"><Link  to={"/update"}>Update</Link></Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

          <Routes>
           
        
         
            <Route  path="/" element={<Home/>} /> 
            <Route path="/update/:id" render={props=>(<RestaurantUpdate key={props.match.params.id} {...props}/> )} /> 
           {/*<Route path="/update"    element={<RestaurantUpdate/>} />*/}
            
            <Route path="/list"    element={<RestaurantList/>} />
            <Route path="/create"  element={<RestaurantCreate/>} />
            <Route path="/search"  element={<RestaurantSearch/>} />
            <Route path="/details" element={<RestaurantDetail/>} />
      
          </Routes>
          
        </Router>
  
  </div>
  );
  
}


export default App;


