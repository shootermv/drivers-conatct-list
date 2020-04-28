import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (<header className="top-navbar">
      <div className="brand"><a href="/">Contact List</a></div>
      <form>
          <input placeholder="search"/>
       </form>
   </header>);
};

export default Navbar;
