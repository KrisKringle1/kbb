import React, { useState, useEffect, useRef } from "react";
import { AppContainer } from "./styled-components";
import { Header } from "./components/Header/Header";
import { DealersView } from "./components/Dealers/DealersView";
import "./App.css";
const functions = require("./functions");

function App() {
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [finalRequest, setFinalRequest] = useState([]);
  const [dataSet, setDataSet] = useState(null);
  const [retrievedIds, setRetrievedIds] = useState(false);
  const [answer, setAnswer] = useState({});
  const [cars, setCars] = useState([]);
  const [carDealers, setCarDealers] = useState([]);
  const isMounted = useRef(false);

  const getAllData = async () => {
    if (dataSet) {
      setDataSet(null);
      setFinalRequest([]);
      setRetrievedIds(false);
      setAnswer({});
      setCars([]);
      setCarDealers([]);
    }
    setFetched(true);
    await functions.getDataSet().then((response) => setDataSet(response));
  };

  /* data set is needed for the app to work
    once data set is guaranteed to be there, getVehicleIds triggers
  */
  useEffect(() => {
    //bug fix for multiple renders
    if (isMounted.current && fetched) {
      setLoading(true);
      functions.getVehicleIds(dataSet).then((res) => {
        setRetrievedIds(true);
        functions.batchRequest(res.vehicleIds, res.dataSet).then((response) => {
          setCars(response.cars);
          setCarDealers(response.dealers);
          setAnswer(response.answer);
          setFinalRequest(response.request);
          setLoading(false);
          setFetched(false);
        });
      });
    } else {
      isMounted.current = true;
    }
  }, [dataSet]);

  return (
    <>
      <AppContainer>
        <Header
          answer={answer}
          getAllData={getAllData}
          dataSet={dataSet}
          retrievedIds={retrievedIds}
          carDealers={carDealers}
          finalRequest={finalRequest}
          loading={loading}
        />

        <DealersView cars={cars} dealers={finalRequest} />
      </AppContainer>
    </>
  );
}

export default App;
