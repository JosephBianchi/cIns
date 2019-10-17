import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { IoIosCar, IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <Nav variant="pills">
      <LinkContainer to="/">
        <IoIosCar
        className=""
        size="2.25em"
        color="#555555"
        />
      </LinkContainer>
      <Nav.Item>
        <LinkContainer to="/search">
          <IoIosSearch
          className=""
          size="2.25em"
          color="#555555"
          />
        </LinkContainer>
      </Nav.Item>
    </Nav>
  )
}

export default Header;
