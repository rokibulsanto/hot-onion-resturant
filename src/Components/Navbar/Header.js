import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logo2.png';
import banner from '../../bannerbackground.png';

const Header = () => {
  const logoStyle = {
    width:'8%'
  }
  const bannerStyle = {
    width:'80%',
    marginLeft:'100px'
  }
    return (
        <div>
          <Navbar bg="light" variant="light">
            <img style={logoStyle} src={logo} alt=""/>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
         <Form inline>
           
           <Button style={{marginRight:'15px'}} variant="outline-info">Log in</Button>
           <Button style={{backgroundColor:'red',borderRadius:'30px'}} variant="outline-info">Sign up</Button>
        </Form>
       </Navbar>
       <br />
       <div>
        <img style={bannerStyle} src={banner} alt=""/>
        <h1 style={{textAlign:'center',fontFamily:'Kumbh Sans',color:'GrayText'}}>Best food waiting for your Belly</h1>
        </div>
        </div>
    );
};

export default Header;