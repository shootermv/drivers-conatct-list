import React from "react";
import searchIcon from './searchIcon.svg'
import {Input, Form, Brand, Header} from  './Navbar.styles.js';


const Navbar = () => {
  return (
    <Header>
        <Brand>
            <a href="/">Contact List</a>
        </Brand>
        <Form>
            <Input placeholder="search"/>
            <img src={searchIcon}/>
        </Form>
    </Header>
   );
};

export default Navbar;
