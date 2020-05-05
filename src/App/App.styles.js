import styled from 'styled-components';

const AppStyles = styled.div` 
&{
  font-family: sans-serif;
  text-align: center;
  background: ${props => props.theme.primaryBgrColor};
  display: flex;
  flex-direction: column; 
  min-height: 100vh;
}

 .content {
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(1, minmax(140px, 1fr));
  grid-gap: 10px;
}

/* mobile styles */

/* small tablet styles */
@media screen and (min-width: 620px){
   .content {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    padding: 40px 30px;
  }
}

/* in between breakpoint */
@media screen and (min-width: 720px){
   .content {
    grid-template-columns: repeat(3, minmax(140px, 1fr));
    padding: 70px 50px;
  }
}


/* large tablet & laptop styles */
@media screen and (min-width: 960px){
   .content {
    grid-template-columns: repeat(3, minmax(140px, 1fr));
    padding: 70px 150px;
  }
}

/* desktop styles */
@media screen and (min-width: 1200px){
   .content {
    grid-template-columns: repeat(4, minmax(140px, 1fr));
    padding: 70px 250px;
  }
}`

const Norecords = styled.div`
  margin-top: 140px;
  opacity: 0.7;
  font-seze: 1.2em;
  grid-column: 1 / 5;
`

export {Norecords, AppStyles};