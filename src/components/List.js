import React, { useEffect, useState } from "react";

export const List = () => {
  const [loading, setLoading] = useState(false);
  const cars = [];

  const getDataSet = async () => {
    setLoading(true);
    const res = await fetch("http://api.coxauto-interview.com/api/datasetId", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await res.json();
    getVehicleIds(data.datasetId);
  };

  const getVehicleIds = async (dataSet) => {
    const res = await fetch(
      `http://api.coxauto-interview.com/api/${dataSet}/vehicles`,
      {
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const data = await res.json();
    const vehicleIds = data.vehicleIds;

    for (let i = 0; i < vehicleIds.length; i++) {
      await getVehicleInfo(dataSet, vehicleIds[i]);
    }
    const dealerIds = {};
    cars.forEach((car) => {
      if (!dealerIds[car.dealerId]) {
        dealerIds[car.dealerId] = car.dealerId;
      }
    });
    setLoading(false);
    console.log(dealerIds);
  };

  const getVehicleInfo = async (dataSet, vehicleId) => {
    const res = await fetch(
      `http://api.coxauto-interview.com/api/${dataSet}/vehicles/${vehicleId}`
    );
    const data = await res.json();
    cars.push(data);
  };

  useEffect(() => {
    getDataSet().then();
  }, []);

  return <div>{loading ? "loading..." : "complete"}</div>;
};
