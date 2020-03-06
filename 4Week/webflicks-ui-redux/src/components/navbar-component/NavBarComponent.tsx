import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';


//this is a function component
const NavBarComponent = (props:any) => {
    // useState is a hook
    // hooks are special functions provided by react for doing specific things
    // useState allows us to build a varibale that react keeps track of like state
    // hooks are only available in functions
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">WebFlicks</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/clicker'>Clicker</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/adding'>Adding</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <Link to='/chucknorris'>ChuckNorrisJokes</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/login'>Login</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/user-info'>User-Info</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/users'>View All Users</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/tic-tac-toe'>T3</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;