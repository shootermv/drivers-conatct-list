import React from "react";
import  {Article, Imgwrap, DriverType, DetailsContainer, Img} from './Contact.styles';
import citizen from './citizen.svg';
import professional from './professional.svg';


const Contact = ({contact}) => {
  const {name, driverType, driverRank, email, phone, profile_image: img } = contact;
  return (
    <Article>
       <Imgwrap>
         <Img src={img}/>
       </Imgwrap>
       
       <DetailsContainer>
          <DriverType src={driverType === 'Professional' ? professional : citizen} /> 
          <h3>{name}</h3>
          <div>driverRank: {driverRank}</div>
          <div>Phone Number: {phone}</div>
          <div>Email: {email}</div>
       </DetailsContainer>
    </Article>
  );
};

export default Contact;
