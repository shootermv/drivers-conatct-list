import React, { useState, useEffect } from "react";
import "./styles.css";


import Navbar from './Navbar';
import Contact from './Contactt';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [term, setTerm] = useState('');
  // must call `fetch` whin component is mounted
  useEffect(() => {
    fetch(`http://private-05627-frontendnewhire.apiary-mock.com/contact_list
    `)
      .then(d => d.json())
      .then(data => {
        setContacts(data);
      });
  }, []);

  const onSearch = searchTerm => setTerm(searchTerm);

  // must search in all fields of 'contact' object except profile_image
  const filtered = arr => {
    return arr.filter(obj => Object.keys(obj).some(key => (key !== 'profile_image') && (new RegExp(term, 'ig')).test(obj[key])));
  } 

  return (
    <div className="App">
      <Navbar onSearch={onSearch}/>
      <main className="content">
          {filtered(contacts).map(contact => (
            <Contact key={`contact-${contact.name}`} contact={contact} />
          ))}  
      </main>
    </div>
  );
}
