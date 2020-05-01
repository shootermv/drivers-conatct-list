import React from 'react'
import { render, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../store/reducers';
import Navbar from './Navbar'

describe('Navbar spec', () => {
    const mockStore = createStore(reducer, {term: null, });

    it('renders the component', () => {
      const container = render(
        <Provider store={mockStore}>
           <Navbar/>
        </Provider>
      )
      expect(container.firstChild).toMatchSnapshot()
     })
})    