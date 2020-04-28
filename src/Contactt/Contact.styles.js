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
`
const Img = styled.img`
  width: 170px;
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

export {Article, Imgwrap, DriverType, DetailsContainer, Img};