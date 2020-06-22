import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Contact from './Contact'

describe('Contact spec', () => {
    it('renders the component', () => {
      const contact = {
        name: '',
        email: '', 
        phone: '', 
        'profile-image': '',
        driverRank: 4
      }  
      const container = render(<Contact contact={contact}/>)
      expect(container.firstChild).toMatchSnapshot()
     })

  it('by default should display "sitizen" image unless contact has "driver" type', () => {
    const contact = {
      name: '',
      email: '', 
      phone: '', 
      'profile-image': '',
      driverRank: 4
    }  
    const {getByAltText} = render(<Contact contact={contact}/>)
    expect(getByAltText('driver type')).toHaveAttribute('src', 'citizen.svg')
   })

   it('should display "professional.svg" image if driver type is "Professional"', () => {
    const contact = {
      name: '',
      email: '', 
      phone: '', 
      'profile-image': '',
      driverType: 'Professional',
      driverRank: 4
    }  
    const {getByAltText} = render(<Contact contact={contact}/>)
    expect(getByAltText('driver type')).toHaveAttribute('src', 'professional.svg')
   })   
})  