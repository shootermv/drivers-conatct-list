import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./styles.css";

/* components */
import Norecords from './App.styles';
import Navbar from './Navbar';
import Contact from './Contact';
import Loader from './shared/Loader';

/* redux */
import {getContacts} from './store/actions';

export default function App() {
  const dispatch = useDispatch();
  const { filtered: filteredContacts, loading } = useSelector(({ filtered, loading }) => ({ filtered, loading }));
 

  useEffect(() => {
    async function fetchData() {
       dispatch(getContacts())
    }
    fetchData();
  }, [dispatch]);
  

  return (
    <div className="App">
      <Navbar/>
      <main className="content">
          {loading && <Loader/>} 
          {!loading && filteredContacts.map(contact => (
            <Contact key={`contact-${contact.name}`} contact={contact} />
          ))}
          {!loading && !filteredContacts.length && <Norecords>No Records Found</Norecords>}
      </main>
    </div>
  );
}
