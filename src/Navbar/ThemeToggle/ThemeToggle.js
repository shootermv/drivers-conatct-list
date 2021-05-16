import React from "react";
import { Switch } from "./ThemeToggle.styles";
import { useSelector, useDispatch } from "react-redux";
import { getTheme } from "../../store/selectors";
import { changeTheme } from "../../store/actions";

const ThemeToggle = () => {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();
  return (
    <Switch>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() =>
          dispatch(changeTheme())
        }
      />
      <span className="slider round"></span>
    </Switch>
  );
};

export default ThemeToggle;
