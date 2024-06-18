const average = require("../functions/average");


test("Average should return 5", () => {
  expect(average(4, 5, 6)).toBe(5)
})


test("Average should return 15", () => {
  expect(average(14, 15, 16)).toBe(15)
})