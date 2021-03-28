import {Button} from "react-bootstrap";
import {Navbar, Nav, Form, FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
function Header()
{
    return(
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">CongVan</Navbar.Brand>
    <Nav className="mr-auto" >
      <Link to="./login" >Login</Link>
      <Link to="./signup">Sign Up</Link>
      <Link to="./addproduct">Add Product</Link>
      <Link to="./updateproduct">Update Product</Link>
      <Link to="./testaxios">TestAxios</Link>
      <Link to="./admin">Admin Layout</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    )
}
export default Header