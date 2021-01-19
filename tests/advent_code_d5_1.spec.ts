import 'mocha';
import { expect } from "chai";
import { getColumnFromCode, getRowFromCode } from "../src/advent_code_d5_1";

describe("getRow behavior", () => {
  // the tests container
  it("should provide row number thanks to the code provided", () => {
    const simplePlace = getRowFromCode("FBFBBFFRLR");
    expect(simplePlace).to.be.eq(44);
  });
});

describe("getColumn behavior", () => {
  // the tests container
  it("should provide row number thanks to the code provided", () => {
    const simplePlace = getColumnFromCode("FBFBBFFRLR");
    expect(simplePlace).to.be.eq(5);
  });
});
