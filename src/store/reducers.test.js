import contactsReducer from './reducers'

describe('contacts reducer', () => {
    it('should return the initial state', () => {
      const initialState = {
          contacts: [],
          filtered: [],
          term: null,
          loading: false
      };
      expect(contactsReducer(undefined, {})).toEqual(initialState);
    });

    it('success action should populate "contacts" and "filtered" fields', () => {
      const initialState = {
        contacts: [],
        filtered: [],
        term: null,
        loading: false
      };
      const contacts = [{}, {}];
      const action = {
          type: 'CONTACTS_SUCCESS', 
          contacts
      };
      const updatedState = {...initialState, contacts, filtered: contacts }
      const result = contactsReducer({}, action)
      expect(result.contacts.length).toEqual(updatedState.contacts.length);
      expect(result.filtered.length).toEqual(updatedState.filtered.length);
    });

    it('filter action should populate "filtered" fields', () => {
      const contacts = [{nm: 'uuu'}, {nm: 'aaa'}];
      const initialState = {
        contacts,
        filtered: contacts,
        term: null,
        loading: false
      };
      
      const action = {
          type: 'CONTACTS_FILTERED',
          term: 'u'
      };
      const updatedState = {...initialState, contacts, term: action.term, filtered: contacts.filter(a => a.nm.includes(action.term)) }
      const result = contactsReducer(initialState, action)
      expect(result.term).toEqual(updatedState.term);
      expect(result.contacts.length).toEqual(updatedState.contacts.length);
      expect(result.filtered.length).toEqual(updatedState.filtered.length);
    }); 
    
    it('filter action should populate "filtered" fields', () => {
      const contacts = [{nm: 'uuu'}, {nm: 'aaa'}];
      const filtered = [{nm: 'uuu'}]
      const initialState = {
        contacts,
        filtered,
        term: 'u',
        loading: false
      };
      
      const action = {
          type: 'FILTER_CLEANED'
      };
      const updatedState = {...initialState, contacts, term: '', filtered: contacts }
      const result = contactsReducer(initialState, action)
      expect(result.term).toEqual(updatedState.term);
      expect(result.contacts.length).toEqual(updatedState.contacts.length);
      expect(result.filtered.length).toEqual(updatedState.filtered.length);
    });     
})    