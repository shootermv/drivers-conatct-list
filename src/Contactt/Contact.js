import React from "react";
import './Contact.css'

const Contact = ({contact}) => {
  const {name, driverType, driverRank, email, phone, profile_image: img } = contact;
  return (
    <article className="card">
       <div className="img-wrap">
         <img src={img}/>
       </div>

       <div className="details-container">
          <h3>{name}</h3>
          <div>driverRank: {driverRank}</div>
          <div>Phone Number: {phone}</div>
          <div>Email: {email}</div>
       </div>
    </article>
  );
};

export default Contact;
