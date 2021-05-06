import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../store/reducers";
import Navbar from "./Navbar";

describe("Navbar spec", () => {
  it("renders the component", () => {
    const mockStore = createStore(reducer, {
      contact: { term: "" },
      theme: "",
    });
    const container = render(
      <Provider store={mockStore}>
        <Navbar />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call "filterContacts" action  when somebody types at the input', () => {
    const mockStore = createStore(reducer, {
      contact: { term: "" },
      theme: "",
    });
    mockStore.dispatch = jest.fn();
    render(
      <Provider store={mockStore}>
        <Navbar />
      </Provider>
    );
    const inpt = document.querySelector('input[placeholder="search"]');
    const target = { target: { value: "1" } };
    fireEvent.change(inpt, target);
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  });
});
