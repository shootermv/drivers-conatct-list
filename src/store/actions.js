import { contactConstants } from './constants';

const url = `http://private-05627-frontendnewhire.apiary-mock.com/contact_list`;

export function getContacts() {
    return dispatch => {
        dispatch(request());

        fetch(url)
            .then(data => data.json())
            .then(
                contacts => { 
                    dispatch(success(contacts));
                },
                error => {
                    //dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: contactConstants.REQUEST } }
    function success(contacts) { return { type: contactConstants.SUCCESS, contacts } }
    // function failure(error) { return { type: contactConstants.FAILURE, error } }
}

export function filterContacts(term) {
    return { type: contactConstants.FILTERED, term }
}

export function filterCleaned() {
    return { type: contactConstants.FILTER_CLEANED, term }
}