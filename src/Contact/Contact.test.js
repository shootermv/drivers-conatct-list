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
})     