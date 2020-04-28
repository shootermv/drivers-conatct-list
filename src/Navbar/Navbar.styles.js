import styled from 'styled-components';


const Header = styled.header`
    background: var(--main-primary-color);
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    position: sticky;
    top: 0;
`
  
const Brand = styled.div`
   a{color: var(--main-secondary-color);}
`
  
const Form = styled.form`
    display: flex;
    border-radius: 10px;
    background: #fff;
    padding: 0 10px;
`

const Input = styled.input`
    border: none;
    padding: 4px;
    outline: none;
    width: 200px;
`

export {Input, Form, Brand, Header}