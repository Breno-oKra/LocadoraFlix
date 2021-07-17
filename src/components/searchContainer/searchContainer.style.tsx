import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const ContainerSearch = styled.div`
  position: relative;
  grid-area: section;
  width: 100%;
  height: 100%;
  background-color: #2d3436;
  z-index: 0;
`;
export const ContainerMovie = styled.div`
  grid-area: movies;
  position: relative;
  justify-content: center;
  min-width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 320px);
  grid-template-rows: auto;
  gap: 5px;
  background-color: #131312;
  padding: 5px;
  z-index: 2;
  overflow-x: hidden;
  overflow-y: scroll;
`;
export const InputSearch = styled(TextField)`
  width: 100%;
  height: 60px;
  background-color: #636e72;
  z-index: 5;
  .MuiInputLabel-root {
    color: #ff7675;
    font-size: 18px;
  }
  .MuiOutlinedInput-root {
    background-color: #ff7675;
    border: 1px solid #ff7675;
  }
  .MuiTextField-root {
    border: 1px solid #ff7675;
  }
`;
