const functions = require("./functions");

test("get dataset returns string", () => {
  expect(functions.getDataSet()).toBeDefined();
});
