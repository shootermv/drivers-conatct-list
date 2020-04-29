import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./styles.css";

/* components */
import Norecords from './App.styles';
import Navbar from './Navbar';
import Contact from './Contactt';
import Loader from './Loader';

import {getContacts} from './store/actions';

export default function App() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(({ filtered }) => filtered);
  const [contacts, setContacts] = useState([]);
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false)
  // must call `fetch` when component is mounted
  /*
  useEffect(() => {

  }, []);
  */

  const onSearch = searchTerm => setTerm(searchTerm);

  dispatch(getContacts())

  return (
    <div className="App">
      <Navbar onSearch={onSearch}/>
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
