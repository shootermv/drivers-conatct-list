import { searchByText, formatPhone } from "./index";

describe("utils formatPhone", () => {
  it("formatPhone - should add mmissing hyphens", () => {
    const term = "1234567890";
    const result = "123-456-7890";
    expect(formatPhone(term)).toEqual(result);
  });

  it("formatPhone - should replace dots by hyphens", () => {
    const term = "123.456.7890";
    const result = "123-456-7890";
    expect(formatPhone(term)).toEqual(result);
  });

  it("formatPhone - should replace spaces by hyphens", () => {
    const term = "123 456   7890";
    const result = "123-456-7890";
    expect(formatPhone(term)).toEqual(result);
  });
});

describe("utils searchByText method", () => {
  it("searchByText - case should be ignored", () => {
    const arr = [
      {
        name: "Vasia",
      },
      {
        name: "Petia",
      },
    ];
    const term = "v";
    expect(searchByText(arr, term)).toEqual([
      {
        name: "Vasia",
      },
    ]);
  });

  it('searchByText - "excluded" field should be ignored', () => {
    const arr = [
      {
        name: "Vasia",
        ex: "",
      },
      {
        name: "Petia",
        ex: "vvv",
      },
    ];
    const term = "vvv";
    const excluded = "ex";
    expect(searchByText(arr, term, excluded)).toEqual([]);
  });

  it('searchByText - when term is empty - the whole array should return', () => {
    const arr = [
      {
        name: "Vasia",
        ex: "",
      },
      {
        name: "Petia",
        ex: "vvv",
      },
    ];
    const term = "";
    const excluded = "ex";
    const resultArr = searchByText(arr, term, excluded)
    expect(arr).toEqual(resultArr);
    expect(arr).not.toBe(resultArr); // should be shallow copy of array
  });

});
