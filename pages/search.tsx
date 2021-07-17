import React, { useState } from "react";
import { ContainerSerach } from "../src/components/ContainerMain/ContainerMain.style";
import RowCardContainer from "../src/components/RowCards/RowCards";
import MotionAnimated from "../src/components/animations/Logo/LogoAnimation";
import SearchContainer from "../src/components/searchContainer/searchContainer";
export default function Home() {
  return (
    <>
      <ContainerSerach>
        <SearchContainer />
      </ContainerSerach>
      <MotionAnimated />
    </>
  );
}
