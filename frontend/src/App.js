import React, { Component } from 'react';
import styles from './App.module.css';

import Main from './components/Main';
import { Switch, Route,Link} from "react-router-dom";

import Women from './components/Women'
import Dummy from './components/Dummy'
import HomeScreen from './components/Screen/HomeScreen';
import ProductScreen from './components/Screen/ProductScreen';
import CartScreen from './components/Screen/CartScreen';
import { Navbar,Nav } from 'react-bootstrap';
import SignIn from './components/Screen/SignIn'
class App extends Component {

  render() {
    return (

      <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
         <Link to="/">
  <Navbar.Brand className={styles.navlink} style={{fontSize:"22px"}}>KAPRAY</Navbar.Brand> </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Men" className={styles.navlink}>MEN</Nav.Link>
      <Nav.Link href="/Women" className={styles.navlink}>WOMEN</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="/cart/:id?" className={styles.navlink}>CART</Nav.Link>
      <Nav.Link eventKey={2} href="/signin" className={styles.navlink}>
        SIGN IN
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        <Switch>

           <Route path="/signin" component={SignIn} /> 
          <Route path="/Dummy" component={Dummy} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/Men" component={HomeScreen} />
          <Route path="/Women" component={Women} />
          <Route exact path="/" component={Main} />


        </Switch>


        
      </div>
    );
  }

}

export default App;
