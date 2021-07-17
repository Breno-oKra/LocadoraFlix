import React, { useState } from "react";
import { ContainerCart } from "../src/components/ContainerMain/ContainerMain.style";
import MotionAnimated from "../src/components/animations/Logo/LogoAnimation";
import { Container } from "@material-ui/core";
import CartTotalBuys from "../src/pagesStyles/Cart-totalBuys";
import CartMovies from "../src/pagesStyles/Cart-totalBuys";
export default function Home() {
  return (
    <>
      <ContainerCart>
        <Container>
          <CartTotalBuys></CartTotalBuys>
          <CartMovies></CartMovies>
        </Container>
      </ContainerCart>
      <MotionAnimated />
    </>
  );
}
