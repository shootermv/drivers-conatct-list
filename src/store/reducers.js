import { contactConstants } from "./constants";
import { combineReducers } from "redux";

export function contact(
  state = { contacts: [], term: "", loading: false },
  action
) {
  switch (action.type) {
    case contactConstants.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case contactConstants.SUCCESS:
      const { contacts } = action;
      return {
        ...state,
        contacts,
        loading: false,
      };

    case contactConstants.FILTER_CHANGED:
      let { term: searchTerm } = action;
      return {
        ...state,
        term: searchTerm,
      };

    default:
      return state;
  }
}

export function theme(state = "light", action) {
  switch (action.type) {
    case "THEME":
      return action.theme;
    default:
      return state;
  }
}

export default combineReducers({
  contact,
  theme,
});
