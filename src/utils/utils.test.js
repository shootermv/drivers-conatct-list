
import {searchByText} from './index';

describe('utils', () => {
    it('searchByText - case should be ignored', () => {
      const arr = [{
          name: 'Vasia',
      },{
        name: 'Petia',
      }];
      const term = 'v'
      expect(searchByText(arr, term)).toEqual([{
        name: 'Vasia',
      }]);
    });

    it('searchByText - excluded field should be ignored', () => {
        const arr = [{
            name: 'Vasia',
            ex: ''
        },{
            name: 'Petia',
            ex: 'vvv'
        }];
        const term = 'vvv'
        const excluded = 'ex'
        expect(searchByText(arr, term, excluded)).toEqual([]);
    });
})