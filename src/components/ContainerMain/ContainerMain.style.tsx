import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 80px auto;
  grid-template-rows: auto;
  background-color: #131312;
  grid-template-areas: "header main";
  overflow-y: hidden;
`;
export const ContainerMovies = styled.div`
  position: relative;
  min-width: 100%;
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 80px 0px;
`;
export const ContainerSerach = styled.div`
  grid-area: main;
  position: relative;
  min-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 400px auto;
  grid-template-rows: auto;
  grid-template-areas: "section movies";
  background-color: #131312;
  overflow-y: hidden;
`;
export const ContainerCart = styled.div`
  grid-area: main;
  position: relative;
  min-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  background-color: #131312;
  overflow-y: hidden;
`;
