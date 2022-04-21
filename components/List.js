import React, { useEffect, useState, useRef } from "react";
const functions = require("../functions");
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

  const [dataSet, setDataSet] = useState(null);
  const [answer, setAnswer] = useState({});
  const [cars, setCars] = useState([]);
  const [carDealers, setCarDealers] = useState([]);
  const isMounted = useRef(false);

  const getAllData = async () => {
    await functions.getDataSet().then((response) => setDataSet(response));
  };

  /* data set is needed for the app to work
    once data set is guaranteed to be there, getVehicleIds triggers
  */
  useEffect(() => {
    //bug fix for multiple renders
    if (isMounted.current) {
      setLoading(true);
      functions.getVehicleIds().then((ids) =>
        functions.batchRequest(ids).then((response) => {
          setCars(response.cars);
          setCarDealers(response.dealers);
          setAnswer(response.answer);
          setLoading(false);
        })
      );
    } else {
      isMounted.current = true;
    }
  }, [dataSet]);

  return (
    <>
      <button onClick={getAllData}>Fetch me</button>
      <div>{loading ? "loading..." : "complete"}</div>
      <div>{cars.map((car) => car.make)}</div>
      <div>{carDealers.map((dealer) => dealer.name)}</div>
      <div>{answer.totalMilliseconds}</div>

      {}
    </>
  );
};
