//gets the data set and sets it to state
export const getDataSet = async () => {
  const res = await fetch("http://api.coxauto-interview.com/api/datasetId", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  dataSet = data.datasetId;
  return dataSet;
};

//gets the vehicle ids and then loops through each of the ids and gets the vehicle info
export const getVehicleIds = async () => {
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
  return vehicleIds;
};

export const batchRequest = async (vehicleIds) => {
  const returnDealers = [];
  const dealerIds = {};

  const cars = await Promise.all(
    vehicleIds.map((id) => getVehicleInfo(id, dealerIds, returnDealers))
  );

  const finalPost = constructReq(returnDealers, cars);
  const answer = await postDataInfo(finalPost);
  return { dealers: returnDealers, cars, answer };
};

//checks to see if the dealer has already been fetched, if it hasnt, it adds the dealer to the dealerIds object and then fetches dealer info
export const dealerConstructor = async (car, dealerIds) => {
  if (!dealerIds[car.dealerId]) {
    dealerIds[car.dealerId] = car.dealerId;
    return await getDealerInfo(car.dealerId);
  }
};

//gets the vehicle info and then adds it to the car array
//once a single car is fetched, it calls dealerConstructor to begin fetching dealer info per car
export const getVehicleInfo = async (vehicleId, dealerIds, returnDealers) => {
  const res = await fetch(
    `http://api.coxauto-interview.com/api/${dataSet}/vehicles/${vehicleId}`
  );
  const data = await res.json();
  //change to state

  const dealer = await dealerConstructor(data, dealerIds);

  if (dealer) {
    returnDealers.push(dealer);
  }

  return data;
};

//gets the info of the dealer and then adds the dealer to the carDealers state array
export const getDealerInfo = async (dealerId) => {
  const res = await fetch(
    `http://api.coxauto-interview.com/api/${dataSet}/dealers/${dealerId}`
  );
  const data = await res.json();
  return data;
};

//constructs the final object and posts it to the end point
export const constructReq = (dealers, cars, returnArr = []) => {
  //dealer construction

  Object.keys(dealers).map((dealer) => {
    //construction object to meet POST requirement
    const dealerObj = {
      dealerId: dealer.dealerId,
      name: dealer.name,
      vehicles: [],
    };
    //car construction
    Object.keys(cars).map((car) => {
      if (car.dealerId === dealerObj.dealerId) {
        const obj = {
          vehicleId: car.vehicleId,
          year: car.year,
          make: car.make,
          model: car.model,
        };

        dealerObj.vehicles.push(obj);
      }
    });

    //pushed the dealer object into the dealer array
    //return this object
    returnArr.push(dealerObj);
  });

  return returnArr;
};

export const postDataInfo = async (finalDealers) => {
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
