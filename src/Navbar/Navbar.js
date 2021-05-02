import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {filterChanged} from '../store/actions';

/* ICONS */
import searchIcon from './searchIcon.svg';
import logo from './logo.svg';
import cleanBtn from './cleanBtn.svg';
import ThemeToggle from './ThemeToggle'

import {Input, Form, Brand, Header} from  './Navbar.styles.js';


const Navbar = () => {
  const term = useSelector(({contact: {term}}) => term || '');
  const changeHandler = e => dispatch(filterChanged(e.target.value));
  const dispatch = useDispatch();
  return (
    <Header>
        <Brand>
            <a href="/" data-testid="brand">
                <span>Contact List</span>
                <img src={logo} alt={'company logo'}/>
            </a>
        </Brand>
        <ThemeToggle/>
        <Form>
            <Input placeholder="search" value={term} onChange={changeHandler} data-testid="search"/>
            {term ? <img alt={'clean'} src={cleanBtn} onClick={e => dispatch(filterChanged(''))}/>: <img  alt={'search'} src={searchIcon}/>}
        </Form>
    </Header>
   );
};

export default Navbar;
