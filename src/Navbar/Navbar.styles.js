import styled from 'styled-components';


const Header = styled.header`
    background: var(--main-primary-color);
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    position: sticky;
    top: 0;
    z-index:2;
`
  
const Brand = styled.div`
   a{color: var(--main-secondary-color);}
`
  
const Form = styled.form`
    display: flex;
    border-radius: 10px;
    background: var(--main-secondary-color);
    padding: 0 10px;
    img {
        height: 15px;
        margin: 3px -5px 0 0;
        opacity: 0.2;
    }
`

const Input = styled.input`
    border: none;
    padding: 4px;
    outline: none;
    width: 200px;
    ::placeholder {
        opacity: 0.8
    }
`

export {Input, Form, Brand, Header}