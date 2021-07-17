import React from "react";
import {
  MainCardContainer,
  SectionBar,
  MoiveBar,
  LogoMovie,
  DescriptionMovie,
  ImageMovie,
  MaskImageShadow,
} from "./MainCardHeader.style";
import { Rating } from "@material-ui/lab";
import { ContainerButton } from "../Cards/ButtonsCardStyle";
import { ButtonCardCart, ButtonCardStar } from "../Cards/ButtonCard";
const MainCardHeader = () => {
  return (
    <MainCardContainer>
      <SectionBar>
        <LogoMovie src="https://i.imgur.com/dZZtUWq.png" />
        <Rating name="size-large" value={4} size="large" />
        <DescriptionMovie>
          filme que ganhou o osca de melhor efeito auditivo maas com leve toque
          de uma grave sonolencia durante o filme cinematico
        </DescriptionMovie>
        <ContainerButton>
          <ButtonCardCart />
          <ButtonCardStar favorit={false} />
        </ContainerButton>
      </SectionBar>
      <MoiveBar>
        <MaskImageShadow />
        <ImageMovie src="https://img.elo7.com.br/product/zoom/24A98BE/quadro-poster-harry-potter-a-pedra-filosofal-harry-potter-e-a-pedra-filosofal.jpg" />
      </MoiveBar>
    </MainCardContainer>
  );
};

export default MainCardHeader;
