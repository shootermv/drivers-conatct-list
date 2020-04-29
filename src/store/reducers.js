const filterContacts = (arr, term) => {
    return arr.filter(obj => Object.keys(obj).some(key => (key !== 'profile_image') && (new RegExp(term, 'ig')).test(obj[key])));
}

export function contacts(state = {contacts:[], filtered:[], term: null}, action) {
   
    switch (action.type) {
        case 'CONTACTS_SUCCESS':           
           const {contacts} =  action;
            return  {     
                ...state,           
                contacts,
                filtered: contacts 
            };
            
        case 'CONTACTS_FILTERED':            
            let {term} = action;
            let filtered = filterContacts(state.contacts, term)
            return {                
                ...state,
                term,
                filtered
            };

          
        case 'FILTER_CLEANED':
            return {    
                ...state,
                term: '',
                filtered: state.contacts
            }; 
            
    
        default:
            return state
    }
} 
export default contacts;