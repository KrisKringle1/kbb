import React from "react";
import { HeaderContainer, Title, Heading } from "../../styled-components";

import { Indicators } from "./Indicators";

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
  return (
    <Heading>
      <HeaderContainer>
        <div>
          <Title>Kelly Blue Book</Title>
          <Indicators
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
