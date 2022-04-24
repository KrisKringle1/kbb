import React, { useState } from "react";
import { css } from "@emotion/react";
import { DataSet } from "./Indicators/DataSet/DataSet";
import { VehicleIds } from "./VehicleIds/VehicleIds";
import { CarDealers } from "./Indicators/CarDealers/CarDealers";
import { DataConstructed } from "./Indicators/DataConstructed/DataConstructed";
import { Answer } from "./Indicators/Answer/Answer";
import { AnswerTime } from "./Indicators/AnswerTime/AnswerTime";

import { DataContainer, Button, ButtonSpan } from "../../styled-components";

export const IndicatorList = ({
  getAllData,
  answer,
  dataSet,
  loading,
  retrievedIds,
  finalRequest,
  carDealers,
}) => {
  let [color, setColor] = useState("#ffffff");

  const override = css`
    display: inline-block;
    margin-right: 3px;
    border-color: red;
  `;
  return (
    <DataContainer>
      <ul style={{ marginBottom: "30px" }}>
        <DataSet
          dataSet={dataSet}
          override={override}
          loading={loading}
          color={color}
        />
        <VehicleIds
          retrievedIds={retrievedIds}
          override={override}
          loading={loading}
          color={color}
        />
        <CarDealers
          carDealers={carDealers}
          override={override}
          loading={loading}
          color={color}
        />

        <DataConstructed
          finalRequest={finalRequest}
          override={override}
          loading={loading}
          color={color}
        />

        <Answer
          answer={answer}
          override={override}
          loading={loading}
          color={color}
        />

        <AnswerTime
          answer={answer}
          override={override}
          loading={loading}
          color={color}
        />
      </ul>
      <Button onClick={getAllData} disabled={loading}>
        <ButtonSpan>
          <strong>Fetch Me</strong>
        </ButtonSpan>
      </Button>
    </DataContainer>
  );
};
