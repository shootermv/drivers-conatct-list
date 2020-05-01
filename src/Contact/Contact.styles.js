import styled from 'styled-components';

const Article = styled.article`
   background: var(--main-secondary-color); 
   padding: 10px;
   color: var(--main-text-color);
   overflow: hidden;
   height: 475px;
   cursor: pointer;
   /* mobile styles */

   /* small tablet styles */
   @media screen and (min-width: 620px){
      &{
         height: 284px;
      }
   }    
`
const Imgwrap = styled.div`
   overflow: hidden;
   height: 370px;
   background: var(--main-text-color);
   /* mobile styles */

   /* small tablet styles */
   @media screen and (min-width: 620px){
      &{
         height: 185px;
      }
   }     
`
const Img = styled.img`
   width: 100%;
   height: auto;
`
const DriverType = styled.img`
   background: var(--main-primary-color);
   border-radius: 50px;
   position: relative;
   top: -30px;
   left: -25%;
   height: 60px;
   width: 60px;
   margin-bottom: -25px;
   /* small tablet styles */
   @media screen and (min-width: 620px){
      &{
         top: -20px;
         height: 40px;
         width: 40px;
      }
   }  
`
const DetailsContainer = styled.div`
   background: var(--main-secondary-color);
   transition: 0.1s ease-in-out;
   &:hover {
    transform: translateY(-100px)
   }
   h3 {
      text-align: left;
      padding: 5px 25px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
   }
   /* small tablet styles */
   @media screen and (min-width: 1200px){
      h3{
         font-size:0.9em;
         padding: 10px 15px;

      }
   } 

`
const Row = styled.div`
   display: flex;
   padding: 5px 25px;
   label {
      text-align: left;
   }
   b {
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
     margin-left: 5px;
   }
   /* mobile styles */

   /* small tablet styles */
   @media screen and (min-width: 620px){
      &{
         font-size: 0.8em;
         padding: 5px;
      }
   }   
`

export { Article, Imgwrap, DriverType, DetailsContainer, Img, Row };