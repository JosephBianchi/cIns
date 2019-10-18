import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { IoIosCar, IoIosSearch } from "react-icons/io";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <Nav className={`justify-content-center p-4 ${styles.navBar}`} variant="pills">
      <LinkContainer to="/">
        <IoIosCar
        className={`mx-5 ${styles.myNav}`}
        size="6.5em"
        color="#08B2E3"
        />
      </LinkContainer>
      <Nav.Item>
        <LinkContainer to="/search">
          <IoIosSearch
          className={`mx-5 ${styles.myNav}`}
          size="6.5em"
          color="#08B2E3"
          />
        </LinkContainer>
      </Nav.Item>
    </Nav>
  )
}

export default Header;
