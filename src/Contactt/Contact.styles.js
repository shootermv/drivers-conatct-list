import styled from 'styled-components';

const Article = styled.article`
   background: var(--main-secondary-color); 
   padding: 10px;
   color: var(--main-text-color);
   overflow: hidden;
   height: 275px;
   cursor: pointer;
`
const Imgwrap = styled.div`
   overflow: hidden;
   height: 185px;
   background: var(--main-text-color);
`
const Img = styled.img`
   width: 180px;
`
const DriverType = styled.img`
   background: var(--main-primary-color);
   border-radius: 50px;
   position: relative;
   top: -20px;
   left: -32px;
   height: 40px;
   width: 40px;
`
const DetailsContainer = styled.div`
   background: var(--main-secondary-color);
   transition: 0.1s ease-in-out;
   &:hover {
    transform: translateY(-100px)
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