import React from "react";
import { HeaderContainer, Title, Heading } from "../../styled-components";

import { IndicatorList } from "./IndicatorList";

// Can be a string as well. Need to ensure each key-value pair ends with ;

export const Header = ({
  getAllData,
  answer,
  dataSet,
  loading,
  retrievedIds,
  finalRequest,
  carDealers,
}) => {
  console.log("data set ", dataSet);
  console.log("car dealers", carDealers);
  console.log("answer ", answer);
  console.log("retrieved ids ", retrievedIds);
  console.log("get all data ", getAllData);
  console.log("final request ", finalRequest);
  return (
    <Heading>
      <HeaderContainer>
        <div>
          <Title>Kelly Blue Book</Title>
          <IndicatorList
            getAllData={getAllData}
            answer={answer}
            dataSet={dataSet}
            loading={loading}
            retrievedIds={retrievedIds}
            finalRequest={finalRequest}
            carDealers={carDealers}
          />
        </div>
      </HeaderContainer>
    </Heading>
  );
};
