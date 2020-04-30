import { contactConstants } from './constants';

const url = `${process.env.REACT_APP_URL ? 'https' : 'http'}://private-05627-frontendnewhire.apiary-mock.com/contact_list`;

export function getContacts() {
    return async dispatch => {
        dispatch(request());
        try {   
           let contacts = await fetch(url).then(data => data.json())
           dispatch(success(contacts))
        } catch(error) {
           dispatch(failure(error.toString()))
        }
    };

    function request() { return { type: contactConstants.REQUEST } }
    function success(contacts) { return { type: contactConstants.SUCCESS, contacts } }
    function failure(error) { return { type: contactConstants.FAILURE, error } }
}

export function filterContacts(term) {
    return { type: contactConstants.FILTERED, term }
}

export function filterCleaned() {
    return { type: contactConstants.FILTER_CLEANED}
}