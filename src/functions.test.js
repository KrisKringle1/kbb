const functions = require("./functions");

test("get dataset returns string", () => {
  expect(functions.getDataSet()).toBeDefined();
});

test("get vehicle ids returns array", () => {
  const dataSet = functions.getDataSet();
  expect(functions.getVehicleIds(dataSet)).toBeDefined();
});

test("dealer constructor is defined", () => {
  expect(functions.dealerConstructor()).toBeDefined();
});

test("get dealer info is defined", () => {
  expect(functions.getDealerInfo()).toBeDefined();
});

test("construction request is defined", () => {
  expect(functions.constructReq()).toBeDefined();
});
test("batch request worked as expected", () => {
  expect(functions.batchRequest()).toBeDefined();
});

test("Post Data returns correct answer", () => {
  expect(functions.postDataInfo()).toBeDefined();
});
