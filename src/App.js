import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ThemeProvider } from 'styled-components';
import { dark, light } from './theme/globalStyle';
import "./styles.css";

/* components */
import {Norecords, AppStyles} from './App.styles';
import Navbar from './Navbar';
import Contact from './Contact';
import Loader from './shared/Loader';

/* redux */
import {getContacts} from './store/actions';

export default function App() {
  const dispatch = useDispatch();
  const { filtered: filteredContacts, loading, theme } = useSelector(({theme, contact: { filtered, loading }}) => ({ filtered, loading, theme }));

  useEffect(() => {
    async function fetchData() {
       dispatch(getContacts())
    }
    fetchData();
  }, [dispatch]);
  
console.log(`theme: ${theme}`)
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <AppStyles>
        <Navbar/>
        <main className="content">
            {loading && <Loader/>} 
            {!loading && filteredContacts.map(contact => (
              <Contact key={`contact-${contact.name}`} contact={contact} />
            ))}
            {!loading && !filteredContacts.length && <Norecords>No Records Found</Norecords>}
        </main>
      </AppStyles>
    </ThemeProvider>
  );
}
