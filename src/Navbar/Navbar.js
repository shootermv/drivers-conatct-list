import React from "react";
import searchIcon from './searchIcon.svg'
import logo from './logo.svg';
import {Input, Form, Brand, Header} from  './Navbar.styles.js';


const Navbar = ({onSearch}) => {
  return (
    <Header>
        <Brand>
            <a href="/">
                <span>Contact List</span>
                <img src={logo}/>
            </a>
        </Brand>
        <Form>
            <Input placeholder="search" onInput={e => onSearch(e.target.value)}/>
            <img src={searchIcon}/>
        </Form>
    </Header>
   );
};

export default Navbar;
