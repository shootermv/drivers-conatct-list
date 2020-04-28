import React, { useState, useEffect } from "react";
import "./styles.css";

import Navbar from './Navbar';
import Contact from './Contactt';

export default function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch(`http://private-05627-frontendnewhire.apiary-mock.com/contact_list
    `)
      .then(d => d.json())
      .then(data => {
        setContacts(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <main className="content">
       
          {contacts.map(contact => (
            <Contact key={`contact-${contact.name}`} contact={contact} />
          ))}
       
      </main>
    </div>
  );
}
