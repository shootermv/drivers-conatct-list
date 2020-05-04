import styles from 'styled-components';

const Switch = styles.label`

position: relative;
display: inline-block;
width: 25px;
height: 45px;


/* Hide default HTML checkbox */
input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ececec;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 1px;
  bottom: 25px;
  background-color: ${props => props.theme.nm === 'light' ? '#ffb200' : 'transparent'};
  -webkit-transition: .4s;
  transition: .4s;
  box-shadow: ${props => props.theme.nm === 'dark' ? '5px 5px 0 0 #eee' : 'none'};
  
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateY(14px) ${props => props.theme.nm === 'dark' ? ' rotate(-45deg) translateX(-15px)' : ''};
  -ms-transform: translateY(14px) ${props => props.theme.nm === 'dark' ? ' rotate(-45deg) translateX(-15px)' : ''};
  transform: translateY(14px) ${props => props.theme.nm === 'dark' ? ' rotate(-45deg) translateX(-15px)' : ''};
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

  /* mobile styles */

  /* small tablet styles */
   @media screen and (min-width: 620px) {
     &{
      position: relative;
      display: inline-block;
      width: 45px;
      height: 25px;
     }
     .slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 4px;
      bottom: 4px;
    }
    input:checked + .slider:before {
        -webkit-transform: translateX(13px)  ${props => props.theme.nm === 'dark' ? ' rotate(-45deg)' : ''};
        -ms-transform: translateX(13px) ${props => props.theme.nm === 'dark' ? ' rotate(-45deg)' : ''};
        transform: translateX(13px) ${props => props.theme.nm === 'dark' ? ' rotate(-45deg)' : ''};
    }
  }    
     
}
`


export  {Switch}