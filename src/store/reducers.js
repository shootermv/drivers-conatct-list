import { contactConstants } from './constants';
import { searchByText } from '../utils';


export function contacts(state = {contacts:[], filtered:[], term: null, loading: false}, action) {
   
    switch (action.type) {
        case contactConstants.REQUEST:  
            return  {     
                ...state,           
                loading: true 
            };           
        case contactConstants.SUCCESS:       
           const {contacts} =  action;
            return  {     
                ...state,           
                contacts,
                filtered: contacts,
                loading: false
            };
            
        case contactConstants.FILTERED:  
            let {term} = action;
            let filtered = searchByText(state.contacts, term, 'profile_image')
            return {                
                ...state,
                term,
                filtered
            };

          
        case contactConstants.FILTER_CLEANED:
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