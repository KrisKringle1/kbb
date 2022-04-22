//gets the data set and returns it
const getDataSet = async () => {
  const res = await fetch("http://api.coxauto-interview.com/api/datasetId", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  const dataSet = data.datasetId;
  return dataSet;
};

//gets the vehicle ids and returns the IDs and dataSet to continue the chain
const getVehicleIds = async (dataSet) => {
  const res = await fetch(
    `http://api.coxauto-interview.com/api/${dataSet}/vehicles`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  const vehicleIds = data.vehicleIds;
  return { vehicleIds, dataSet };
};

//Promise.all that requests all of the vehicle information, returns final object to update state
const batchRequest = async (vehicleIds, dataSet) => {
  //variables passed down into lower functions to keep track of what dealers need to be queried and returned
  const dealers = [];
  const dealerIds = {};

  const cars = await Promise.all(
    vehicleIds.map((id) => getVehicleInfo(id, dealerIds, dealers, dataSet))
  );
  //when the batching is complete, the request is immediately constructed and posted
  const finalPost = constructReq(dealers, cars);
  const answer = await postDataInfo(finalPost, dataSet);
  return { dealers, cars, answer, request: finalPost };
};

//gets the vehicle info and then adds it to the car array
//once a single car is fetched, it calls dealerConstructor to begin fetching dealer info per car
const getVehicleInfo = async (vehicleId, dealerIds, dealers, dataSet) => {
  const res = await fetch(
    `http://api.coxauto-interview.com/api/${dataSet}/vehicles/${vehicleId}`
  );
  const data = await res.json();
  const dealer = await dealerConstructor(data, dealerIds, dataSet);
  //if the dealer comes back with something, push it into the dealers array
  if (dealer) {
    dealers.push(dealer);
  }
  return data;
};

//checks to see if the dealer has already been fetched, if it hasnt, it adds the dealer to the dealerIds object and then fetches dealer info
const dealerConstructor = async (car, dealerIds, dataSet) => {
  if (!dealerIds[car.dealerId]) {
    dealerIds[car.dealerId] = car.dealerId;
    return await getDealerInfo(car.dealerId, dataSet);
  }
};

//gets the info of the dealer
const getDealerInfo = async (dealerId, dataSet) => {
  const res = await fetch(
    `http://api.coxauto-interview.com/api/${dataSet}/dealers/${dealerId}`
  );
  const data = await res.json();
  return data;
};

//constructs the final object in the proper format
const constructReq = (dealers, cars, returnArr = []) => {
  //dealer construction
  for (const index in dealers) {
    const dealer = dealers[index];
    //construction object to meet POST requirement
    const dealerObj = {};
    dealerObj.dealerId = dealer.dealerId;
    dealerObj.name = dealer.name;
    dealerObj.vehicles = [];
    //car construction
    for (const index in cars) {
      const car = cars[index];
      if (car.dealerId === dealerObj.dealerId) {
        const obj = {};
        obj.vehicleId = car.vehicleId;
        obj.year = car.year;
        obj.make = car.make;
        obj.model = car.model;
        dealerObj.vehicles.push(obj);
      }
    }
    //pushed the dealer object into the dealer array
    returnArr.push(dealerObj);
  }
  return returnArr;
};

//takes the final dealers object from constructReq and dataSet and posts it to answer api
const postDataInfo = async (finalDealers, dataSet) => {
  const res = await fetch(
    `http://api.coxauto-interview.com/api/${dataSet}/answer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dealers: finalDealers }),
    }
  );
  const data = await res.json();
  return data;
};

const functions = {
  getDataSet,
  getVehicleIds,
  dealerConstructor,
  getDealerInfo,
  constructReq,
  postDataInfo,
  batchRequest,
};

module.exports = functions;
