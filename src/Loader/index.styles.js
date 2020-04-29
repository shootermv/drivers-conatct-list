
import styled, {keyframes} from 'styled-components';


const LoaderWrap = styled.div`
    align-self: center;
    margin: 100px auto 400px;
    grid-column: 1 / 5;
    width: 75px;
    height: 75px;      
`

const spin = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
    width: 75px;
    height: 75px;
    margin: 0;
    background: transparent;
    border-top: 4px solid var(--main-primary-color);
    border-right: 4px solid transparent;
    border-radius: 50%;
    animation: 1s ${spin} linear infinite;
`

export {LoaderWrap, Spinner}