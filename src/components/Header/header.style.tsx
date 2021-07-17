import styled from "styled-components";
import { Button } from "@material-ui/core";
export const HeaderContainerStyle = styled.div`
  grid-area: header;
  position: fixed;
  width: 100%;
  height: 100%;
`;
export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  background-color: red;

  &:hover {
    width: 80px;
    z-index: 6;
    transition: 0.4s;
    button:hover {
      transform: translateX(10px) scale(2);
      transition: 0.6s;
      z-index: 6;
    }
    button:not(:hover) {
      transform: translateX(0) scale(1);
      transition: 0.6s;
    }
  }
  &:not(:hover) {
    width: 50px;
    z-index: 0;
    transition: 0.4s;
  }
`;
export const BoxIconsHeader = styled(Button)`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
`;
