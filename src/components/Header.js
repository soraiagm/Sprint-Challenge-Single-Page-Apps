import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/characters">Characters</NavLink>
        </NavItem>
      </Nav>
    </header>
  );
}

export default Header;
