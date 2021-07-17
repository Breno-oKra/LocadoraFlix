import styled from "styled-components";

export const MainCardContainer = styled.div`
  width: 100%;
  height: 550px;
  display: grid;
  display: grid;
  grid-template-columns: 400px auto;
  grid-template-rows: 100%;
  grid-template-areas: "section movie";
`;
export const SectionBar = styled.div`
  grid-area: section;
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 2;
`;
export const MoiveBar = styled.div`
  position: relative;
  grid-area: movie;
`;
export const LogoMovie = styled.img`
  position: relative;
  top: 0;
  left: 20px;
  width: 400px;
  height: 150px;
`;
export const DescriptionMovie = styled.p`
  font-size: 17px;
  color: #fff;
  font-family: arial Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
export const ImageMovie = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.9;
  z-index: 0;
`;
export const MaskImageShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 30px 20px 100px 80px #131312;
  z-index: 1;
`;
