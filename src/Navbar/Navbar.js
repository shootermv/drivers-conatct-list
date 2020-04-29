import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {filterContacts} from '../store/actions';
/* ICONS */
import searchIcon from './searchIcon.svg'
import logo from './logo.svg';

import {Input, Form, Brand, Header} from  './Navbar.styles.js';


const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Header>
        <Brand>
            <a href="/">
                <span>Contact List</span>
                <img src={logo}/>
            </a>
        </Brand>
        <Form>
            <Input placeholder="search" onInput={e => dispatch(filterContacts(e.target.value))}/>
            <img src={searchIcon}/>
        </Form>
    </Header>
   );
};

export default Navbar;
