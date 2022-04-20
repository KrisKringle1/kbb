import React, { useEffect, useState } from "react";
/* 
todo
change from a useEffect to a button call to fetch data
1. remove unnecessary chaining
2. convert functions to promise.all - add await to the Promise.all
3. remove global variables and change to  state
4. add a UI that somewhat resembles kevins
5. utilize CSS animations 

*/
export const List = () => {
  const [loading, setLoading] = useState(false);
  //change to state
  const cars = [];
  const carDealers = [];
  const dealers = [];

  const getDataSet = async () => {
    setLoading(true);
    const res = await fetch("http://api.coxauto-interview.com/api/datasetId", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("data set ", data);
    getVehicleIds(data.datasetId);
  };

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

    console.log("vehicle Ids ", data);

    for (let i = 0; i < vehicleIds.length; i++) {
      await getVehicleInfo(dataSet, vehicleIds[i]);
    }
    const dealerIds = {};
    //change to a filter
    cars.forEach((car) => {
      if (!dealerIds[car.dealerId]) {
        dealerIds[car.dealerId] = car.dealerId;
      }
    });

    for (const dealerId in dealerIds) {
      await getDealerInfo(dataSet, dealerId);
    }

    await postDataInfo(dataSet);

    console.log("post complete");
  };

  const getVehicleInfo = async (dataSet, vehicleId) => {
    const res = await fetch(
      `http://api.coxauto-interview.com/api/${dataSet}/vehicles/${vehicleId}`
    );
    const data = await res.json();
    console.log("vehicle info ", data);
    //change to state
    cars.push(data);
  };

  const getDealerInfo = async (dataSet, dealerId) => {
    const res = await fetch(
      `http://api.coxauto-interview.com/api/${dataSet}/dealers/${dealerId}`
    );
    const data = await res.json();
    console.log("dealer info ", data);
    carDealers.push(data);
  };

  const postDataInfo = async (dataSet) => {
    for (const index in carDealers) {
      const dealer = carDealers[index];

      const dealerObj = {};
      dealerObj.dealerId = dealer.dealerId;
      dealerObj.name = dealer.name;
      dealerObj.vehicles = [];

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

      dealers.push(dealerObj);
    }

    console.log("dealers final ", { dealers: dealers });

    const res = await fetch(
      `http://api.coxauto-interview.com/api/${dataSet}/answer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dealers: dealers }),
      }
    );

    const data = await res.json();

    console.log("answer post ", data);

    setLoading(false);
  };

  useEffect(() => {
    console.log("i fire once");
    getDataSet();
  }, []);

  return <div>{loading ? "loading..." : "complete"}</div>;
};
