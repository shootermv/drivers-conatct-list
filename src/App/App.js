import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../theme/globalStyle';
import "../styles.css";

/* components */
import {Norecords, AppStyles} from './App.styles';
import Navbar from '../Navbar';
import Contact from '../Contact';
import Loader from '../shared/Loader';

/* redux */
import {getContacts} from '../store/actions';
import {getTheme, getLoading, getVisibleContacts} from '../store/selectors';



export default function App() {
  const dispatch = useDispatch();
  // selectors
  const theme = useSelector(getTheme);
  const visibleContacts = useSelector(getVisibleContacts);
  const loading = useSelector(getLoading);

  useEffect(() => {
    async function fetchData() {
       dispatch(getContacts())
    }
    fetchData();
  }, [dispatch]);
  
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <AppStyles>
        <Navbar/>
        <main className="content">
            {loading && <Loader/>} 
            {!loading && visibleContacts?.map(contact => (
              <Contact key={`contact-${contact.name}`} contact={contact} />
            ))}
            {!loading && !visibleContacts?.length && <Norecords>No Records Found</Norecords>}
        </main>
      </AppStyles>
    </ThemeProvider>
  );
}
