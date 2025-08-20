import React from "react";
import Statistics from "../../Offers/Statistics";
import Layout from "../Layout/Layout";

import TopSubCate from "./TopSubCate";
import BestOfBeauty from "./BestOfBeauty";
import SubBrandToKnow from "./SubBrandToKnow";
import SliderSub from "./SliderSub";
import SellingFast from "./SellingFast";
import SetsBundles from "./SetsBundles";
import InFocusSub from "./InFocusSub";
import SubTannisTube from "./SubTannisTube";
function MainSubategory() {
  return (
    <Layout>
      <SliderSub />
      <TopSubCate />
      <BestOfBeauty />
      <SetsBundles />
      <SubBrandToKnow />
      <SubTannisTube />
      <InFocusSub />
      <SellingFast />
      <Statistics />
    </Layout>
  );
}

export default MainSubategory;
