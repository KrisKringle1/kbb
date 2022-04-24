const functions = require("./functions");

test("get dataset returns defined string", async () => {
  const dataSet = await functions.getDataSet();
  expect(dataSet).toBeDefined();
});

test("get vehicle ids returns array", async () => {
  const vehicleIds = [
    1809895707, 1829628657, 253718412, 2081848578, 1365861952, 2146982858,
    1223954998, 1032962395, 699215794,
  ];
  const ids = await functions.getVehicleIds("3pQPeWAl2gg");

  expect(ids.vehicleIds).toEqual(vehicleIds);
});

test("dealer constructor returns expected", async () => {
  const dataSet = "3pQPeWAl2gg";
  const car = {
    vehicleId: 253718412,
    make: "Bentley",
    model: "Mulsanne",
    year: 2016,
    dealerId: 1654241051,
  };
  const expectedDealer = {
    dealerId: 1654241051,
    name: "Doug's Doozies",
  };
  const dealer = await functions.dealerConstructor(car, {}, dataSet);

  expect(dealer).toEqual(expectedDealer);
});

test("get dealer returns proper response", async () => {
  const dealerId = 1654241051;
  const dataSet = "3pQPeWAl2gg";
  const dealer = await functions.getDealerInfo(dealerId, dataSet);
  const expectedDealer = {
    dealerId: 1654241051,
    name: "Doug's Doozies",
  };
  expect(dealer).toEqual(expectedDealer);
});

test("construction request is returned correctly", async () => {
  const dealers = [
    { dealerId: 1654241051, name: "Doug's Doozies" },
    { dealerId: 1026755274, name: "Bob's Cars" },
    { dealerId: 1893924360, name: "House of Wheels" },
  ];

  const cars = [
    {
      dealerId: 1893924360,
      make: "Kia",
      model: "Soul",
      vehicleId: 1809895707,
      year: 2016,
    },
    {
      dealerId: 1026755274,
      make: "Honda",
      model: "Accord",
      vehicleId: 1829628657,
      year: 2016,
    },
    {
      dealerId: 1654241051,
      make: "Bentley",
      model: "Mulsanne",
      vehicleId: 253718412,
      year: 2016,
    },
    {
      dealerId: 1026755274,
      make: "MINI",
      model: "Cooper",
      vehicleId: 2081848578,
      year: 2004,
    },
    {
      dealerId: 1654241051,
      make: "Cheverolet",
      model: "Corvette",
      vehicleId: 1365861952,
      year: 1979,
    },
    {
      dealerId: 1654241051,
      make: "Nissan",
      model: "Altima",
      vehicleId: 2146982858,
      year: 2012,
    },
    {
      dealerId: 1026755274,
      make: "Ford",
      model: "F150",
      vehicleId: 1223954998,
      year: 2014,
    },
    {
      dealerId: 1893924360,
      make: "Ford",
      model: "F150",
      vehicleId: 1032962395,
      year: 2009,
    },
    {
      dealerId: 1893924360,
      make: "Mitsubishi",
      model: "Gallant",
      vehicleId: 699215794,
      year: 2013,
    },
  ];

  const expectedResult = [
    {
      dealerId: 1654241051,
      name: "Doug's Doozies",
      vehicles: [
        {
          vehicleId: 253718412,
          make: "Bentley",
          model: "Mulsanne",
          year: 2016,
        },
        {
          vehicleId: 1365861952,
          make: "Cheverolet",
          model: "Corvette",
          year: 1979,
        },
        { vehicleId: 2146982858, make: "Nissan", model: "Altima", year: 2012 },
      ],
    },
    {
      dealerId: 1026755274,
      name: "Bob's Cars",
      vehicles: [
        { vehicleId: 1829628657, make: "Honda", model: "Accord", year: 2016 },
        { vehicleId: 2081848578, make: "MINI", model: "Cooper", year: 2004 },
        { vehicleId: 1223954998, make: "Ford", model: "F150", year: 2014 },
      ],
    },
    {
      dealerId: 1893924360,
      name: "House of Wheels",
      vehicles: [
        { vehicleId: 1809895707, make: "Kia", model: "Soul", year: 2016 },
        { vehicleId: 1032962395, make: "Ford", model: "F150", year: 2009 },
        {
          vehicleId: 699215794,
          make: "Mitsubishi",
          model: "Gallant",
          year: 2013,
        },
      ],
    },
  ];

  const response = await functions.constructReq(dealers, cars);
  expect(response).toEqual(expectedResult);
});

jest.setTimeout(30000);
test("batch request worked as expected", async () => {
  const vehicleIds = [
    1809895707, 1829628657, 253718412, 2081848578, 1365861952, 2146982858,
    1223954998, 1032962395, 699215794,
  ];
  const dataSet = "3pQPeWAl2gg";
  const response = await functions.batchRequest(vehicleIds, dataSet);

  const batchAnswer = response.answer;
  const batchDealers = response.dealers;
  const batchCars = response.cars;
  const batchRequest = response.request;
  const expectedDealers = [
    { dealerId: 1654241051, name: "Doug's Doozies" },
    { dealerId: 1026755274, name: "Bob's Cars" },
    { dealerId: 1893924360, name: "House of Wheels" },
  ];

  const expectedCars = [
    {
      dealerId: 1893924360,
      make: "Kia",
      model: "Soul",
      vehicleId: 1809895707,
      year: 2016,
    },
    {
      dealerId: 1026755274,
      make: "Honda",
      model: "Accord",
      vehicleId: 1829628657,
      year: 2016,
    },
    {
      dealerId: 1654241051,
      make: "Bentley",
      model: "Mulsanne",
      vehicleId: 253718412,
      year: 2016,
    },
    {
      dealerId: 1026755274,
      make: "MINI",
      model: "Cooper",
      vehicleId: 2081848578,
      year: 2004,
    },
    {
      dealerId: 1654241051,
      make: "Cheverolet",
      model: "Corvette",
      vehicleId: 1365861952,
      year: 1979,
    },
    {
      dealerId: 1654241051,
      make: "Nissan",
      model: "Altima",
      vehicleId: 2146982858,
      year: 2012,
    },
    {
      dealerId: 1026755274,
      make: "Ford",
      model: "F150",
      vehicleId: 1223954998,
      year: 2014,
    },
    {
      dealerId: 1893924360,
      make: "Ford",
      model: "F150",
      vehicleId: 1032962395,
      year: 2009,
    },
    {
      dealerId: 1893924360,
      make: "Mitsubishi",
      model: "Gallant",
      vehicleId: 699215794,
      year: 2013,
    },
  ];
  const expectedRequest = [
    {
      dealerId: 1654241051,
      name: "Doug's Doozies",
      vehicles: [
        {
          vehicleId: 253718412,
          make: "Bentley",
          model: "Mulsanne",
          year: 2016,
        },
        {
          vehicleId: 1365861952,
          make: "Cheverolet",
          model: "Corvette",
          year: 1979,
        },
        { vehicleId: 2146982858, make: "Nissan", model: "Altima", year: 2012 },
      ],
    },
    {
      dealerId: 1026755274,
      name: "Bob's Cars",
      vehicles: [
        { vehicleId: 1829628657, make: "Honda", model: "Accord", year: 2016 },
        { vehicleId: 2081848578, make: "MINI", model: "Cooper", year: 2004 },
        { vehicleId: 1223954998, make: "Ford", model: "F150", year: 2014 },
      ],
    },
    {
      dealerId: 1893924360,
      name: "House of Wheels",
      vehicles: [
        { vehicleId: 1809895707, make: "Kia", model: "Soul", year: 2016 },
        { vehicleId: 1032962395, make: "Ford", model: "F150", year: 2009 },
        {
          vehicleId: 699215794,
          make: "Mitsubishi",
          model: "Gallant",
          year: 2013,
        },
      ],
    },
  ];

  expect(batchAnswer.message).toBe("Congratulations.");
  expect(batchAnswer.success).toBe(true);
  expect(batchDealers).toEqual(expectedDealers);
  expect(batchCars).toEqual(expectedCars);
  expect(batchRequest).toEqual(expectedRequest);
});

test("Post Data returns correct answer", async () => {
  const dataSet = "3pQPeWAl2gg";

  const request = [
    {
      dealerId: 1654241051,
      name: "Doug's Doozies",
      vehicles: [
        {
          vehicleId: 253718412,
          make: "Bentley",
          model: "Mulsanne",
          year: 2016,
        },
        {
          vehicleId: 1365861952,
          make: "Cheverolet",
          model: "Corvette",
          year: 1979,
        },
        { vehicleId: 2146982858, make: "Nissan", model: "Altima", year: 2012 },
      ],
    },
    {
      dealerId: 1026755274,
      name: "Bob's Cars",
      vehicles: [
        { vehicleId: 1829628657, make: "Honda", model: "Accord", year: 2016 },
        { vehicleId: 2081848578, make: "MINI", model: "Cooper", year: 2004 },
        { vehicleId: 1223954998, make: "Ford", model: "F150", year: 2014 },
      ],
    },
    {
      dealerId: 1893924360,
      name: "House of Wheels",
      vehicles: [
        { vehicleId: 1809895707, make: "Kia", model: "Soul", year: 2016 },
        { vehicleId: 1032962395, make: "Ford", model: "F150", year: 2009 },
        {
          vehicleId: 699215794,
          make: "Mitsubishi",
          model: "Gallant",
          year: 2013,
        },
      ],
    },
  ];

  const result = await functions.postDataInfo(request, dataSet);
  expect(result.message).toBe("Congratulations.");
  expect(result.success).toBe(true);
});
