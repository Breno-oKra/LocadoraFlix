import React, { useState } from "react";
import { ContainerMovies } from "../src/components/ContainerMain/ContainerMain.style";
import RowCardContainer from "../src/components/RowCards/RowCards";
import MotionAnimated from "../src/components/animations/Logo/LogoAnimation";
import MainCardHeader from "../src/components/MainCardHeader/MainCardHeader";
export default function HomePage() {
  return (
    <>
      <ContainerMovies>
        <MainCardHeader />
        <RowCardContainer />
        <RowCardContainer />
      </ContainerMovies>
      <MotionAnimated />
    </>
  );
}
