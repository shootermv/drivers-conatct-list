import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Contact from "./Contact";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../store/reducers";


describe("Contact spec", () => {
  it("renders the component", () => {
    const contact = {
      id: 1,
      name: "",
      email: "",
      phone: "",
      "profile-image": "",
      driverRank: 4,
    };
    const mockStore = createStore(reducer, {
      contact: {
        term: "",
        contacts: [contact],
      },
      theme: "",
    });
    const container = render(
      <Provider store={mockStore}>
        <Contact contact={contact} />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('by default should display "sitizen" image unless contact has "driver" type', () => {
    const contact = {
      id: 1,
      name: "",
      email: "",
      phone: "",
      "profile-image": "",
      driverRank: 4,
    };
    const mockStore = createStore(reducer, {
      contact: {
        term: "",
        contacts: [contact],
      },
      theme: "",
    });
    const { getByAltText } = render(
      <Provider store={mockStore}>
        <Contact contact={contact} />
      </Provider>
    );
    expect(getByAltText("driver type")).toHaveAttribute("src", "citizen.svg");
  });

  it('should display "professional.svg" image if driver type is "Professional"', () => {
    const contact = {
      id: 1,
      name: "",
      email: "",
      phone: "",
      "profile-image": "",
      driverType: "Professional",
      driverRank: 4,
    };
    const mockStore = createStore(reducer, {
      contact: {
        term: "",
        contacts: [contact],
      },
      theme: "",
    });
    const { getByAltText } = render(
      <Provider store={mockStore}>
        <Contact contact={contact} />
      </Provider>
    );
    expect(getByAltText("driver type")).toHaveAttribute(
      "src",
      "professional.svg"
    );
  });
});
