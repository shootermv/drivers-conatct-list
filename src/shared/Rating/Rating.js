import React from 'react';
import Wrap from './Rating.styles'

const Star = ({ selected=false, onClick=f=>f }) =>
  <div className={(selected) ? "star selected" : "star"}
      onClick={onClick}>
  </div>



class Rating extends React.Component {
  
  constructor(props) {
    super(props)
      this.state = {
        starsSelected: props.rating
      }
      this.change = this.change.bind(this)
    }
    
    change(starsSelected) {
      this.setState({starsSelected})
    }
    
    render() {
      const {starsSelected} = this.state;
      return (
        <Wrap>
          {[1,2,3,4,5].map((n, i) =>
               <Star key={i}
                     selected={i < starsSelected}
                     onClick={() => this.change(i+1)}
              />
           )}
        </Wrap>
      )
    }
 }
 


Rating.defaultProps = {
  totalStars: 5
}

export default Rating