import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {filterContacts, filterCleaned} from '../store/actions';

/* ICONS */
import searchIcon from './searchIcon.svg';
import logo from './logo.svg';
import cleanBtn from './cleanBtn.svg';


import {Input, Form, Brand, Header} from  './Navbar.styles.js';


const Navbar = () => {
  const term = useSelector(({contact: {term}}) => term || '');
  const chang = e => dispatch(filterContacts(e.target.value));
  const dispatch = useDispatch();
  return (
    <Header>
        <Brand>
            <a href="/">
                <span>Contact List</span>
                <img src={logo} alt={'company logo'}/>
            </a>
        </Brand>
        <Form>
            <Input placeholder="search" value={term} onChange={chang}/>
            {term ? <img alt={'clean'} src={cleanBtn} onClick={e => dispatch(filterCleaned())}/>: <img  alt={'search'} src={searchIcon}/>}
        </Form>
    </Header>
   );
};

export default Navbar;
