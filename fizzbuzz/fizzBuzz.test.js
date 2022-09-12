const fizzBuzz = require("./fizzBuzz");

describe("fizzBuzz", () => {
  it("returns fizz for a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });

  it("returns buzz for a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });

  it("return fizzBuzz for a number that is a multiple of 5 and 3", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });

  it("returns a number if it is not a multiple of 3 or 5", () => {
    expect(fizzBuzz(8)).toBe(8);
  });
});
