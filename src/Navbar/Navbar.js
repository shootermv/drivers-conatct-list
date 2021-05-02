import React from "react";

/* ICONS */
import searchIcon from "./searchIcon.svg";
import logo from "./logo.svg";
import cleanBtn from "./cleanBtn.svg";
import ThemeToggle from "./ThemeToggle";
/* redux stuff */
import { useSelector, useDispatch } from "react-redux";
import { filterChanged } from "../store/actions";
import { getTerm } from "../store/selectors";

import { Input, Form, Brand, Header } from "./Navbar.styles.js";

const Navbar = () => {
  const term = useSelector(getTerm);
  const changeHandler = (e) => dispatch(filterChanged(e.target.value));
  const dispatch = useDispatch();
  return (
    <Header>
      <Brand>
        <a href="/" data-testid="brand">
          <span>Contact List</span>
          <img src={logo} alt={"company logo"} />
        </a>
      </Brand>
      <ThemeToggle />
      <Form>
        <Input
          placeholder="search"
          value={term}
          onChange={changeHandler}
          data-testid="search"
        />
        {term ? (
          <img
            alt={"clean"}
            src={cleanBtn}
            data-testid="clean-filter"
            onClick={(e) => dispatch(filterChanged(""))}
          />
        ) : (
          <img alt={"search"} src={searchIcon} />
        )}
      </Form>
    </Header>
  );
};

export default Navbar;
