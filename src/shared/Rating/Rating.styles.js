import styled from 'styled-components';


const Wrap = styled.div`
    display: flex; 
    padding: 0px 25px;
    /* small tablet styles */
    @media screen and (min-width: 620px){
        &{
            padding: 5px 15px;
        }
    }
    .star {
        cursor: pointer;
        height: 25px;
        width: 25px;
        margin: 2px;
        float: left;
        background-color: grey;
       -webkit-clip-path: polygon(
        50% 0%,
        63% 38%,
        100% 38%,
        69% 59%,
        82% 100%,
        50% 75%,
        18% 100%,
        31% 59%,
        0% 38%,
        37% 38%
        );
      }
      .star.selected {
        background-color: yellow;
      }   
`

export default Wrap;