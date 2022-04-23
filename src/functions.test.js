const functions = require("./functions");

test("get dataset returns string", async () => {
  expect(functions.getDataSet()).toBe("3pQPeWAl2gg");
});

test("get vehicle ids returns array", async () => {
  const vehicleIds = [
    1809895707, 1829628657, 253718412, 2081848578, 1365861952, 2146982858,
    1223954998, 1032962395, 699215794,
  ];
  const ids = await functions.getVehicleIds("3pQPeWAl2gg");

  expect(ids.vehicleIds).toEqual(vehicleIds);
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
