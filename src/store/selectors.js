import { createSelector } from "reselect";
import { searchByText } from "../utils";

export const getTerm = state => state.contact.term;
export const getContacts = state => state.contact.contacts;
export const getLoading = state => state.contact.loading;
export const getTheme = state => state.theme;

export const getVisibleContacts = createSelector(
    [getTerm, getContacts],
    (searchTerm, contacts) => searchByText(contacts, searchTerm, "profile_image").length
)