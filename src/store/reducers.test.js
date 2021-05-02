import { contact as contactsReducer } from "./reducers";

describe("contacts reducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      contacts: [],
      term: "",
      loading: false,
    };
    expect(contactsReducer(undefined, {})).toEqual(initialState);
  });

  it('success action should populate "contacts"  fields', () => {
    const initialState = {
      contacts: [],
      term: "",
      loading: false,
    };
    const contacts = [{}, {}];
    const action = {
      type: "CONTACTS_SUCCESS",
      contacts,
    };
    const updatedState = { ...initialState, contacts };
    const result = contactsReducer({}, action);
    expect(result.contacts.length).toEqual(updatedState.contacts.length);
  });

  it('filter_changed action should populate "term" field', () => {
    const contacts = [{ nm: "uuu" }, { nm: "aaa" }];
    const initialState = {
      contacts,
      term: "",
      loading: false,
    };

    const action = {
      type: "CONTACTS_FILTER_CHANGED",
      term: "u",
    };

    const updatedState = { ...initialState, contacts, term: action.term };
    const result = contactsReducer(initialState, action);
    expect(result.contacts.term).toEqual(updatedState.contacts.term);
  });

  it('clean filter input should set "term" property to empty', () => {
    const contacts = [{ nm: "uuu" }, { nm: "aaa" }];
    const filtered = [{ nm: "uuu" }];
    const initialState = {
      contacts,
      loading: false,
    };

    const action = {
      type: "CONTACTS_FILTER_CHANGED",
    };
    const updatedState = { ...initialState, contacts, term: "" };
    const result = contactsReducer(initialState, action);
    expect(result.contacts.term).toEqual(updatedState.contacts.term);
  });
});
