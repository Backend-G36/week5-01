const cToF = require("../functions/cToF");

test("cToF should return 68 F", () => {
  expect(cToF(20)).toBe(68)
})