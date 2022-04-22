import React from "react";
import { Dealer } from "./Dealer";
import { FadeIn, DealerViewContainer } from "../../styled-components";

export const DealersView = ({ dealers }) => {
  const dealerList = dealers.map((dealer) => (
    <FadeIn key={dealer.dealerId}>
      <Dealer dealer={dealer} key={dealer.dealerId} />
    </FadeIn>
  ));

  return <DealerViewContainer>{dealerList}</DealerViewContainer>;
};
