import { Button } from "@material-ui/core";
import styled from "styled-components";

export const BoxCardBuy = styled.div`
  width: 50%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #2d3436;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  padding: 5px;
`;
export const HeaderCardBuy = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
  background-color: #57606f;
  color: #fff;
  border-bottom: 2px solid #a4b0be;
  font-size: 20px;
`;
export const ButtonFinallity = styled(Button)`
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  margin-top: auto;
  background-color: #eb2f06;
  color: #fff;
`;
export const BoxTotal = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  margin-top: auto;
  background-color: #57606f;
`;
