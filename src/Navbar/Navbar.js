import React from "react";

import {Input, Form, Brand, Header} from  './Navbar.styles.js';


const Navbar = () => {
  return (
    <Header>
        <Brand>
            <a href="/">Contact List</a>
        </Brand>
        <Form>
            <Input placeholder="search"/>
        </Form>
    </Header>
   );
};

export default Navbar;
