import React from 'react';
import {Switch} from './ThemeToggle.styles';
import { useSelector, useDispatch } from "react-redux";

import {changeTheme} from '../../store/actions'


const ThemeToggle = () => {
    const theme = useSelector(({theme}) => theme)
    const dispatch = useDispatch();
    return (
        <Switch>
            <input type="checkbox" checked={theme === 'dark'} onChange={() => dispatch(changeTheme(theme === 'light'? 'dark' : 'light'))}/>
            <span className="slider round"></span>
        </Switch>        
    )
}

export default ThemeToggle;