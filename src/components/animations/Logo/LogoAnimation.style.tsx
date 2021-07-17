import styled from "styled-components";

export const LogoAnimationContainer = styled.div`
  position: fixed;
  right: 50px;
  bottom: 20px;
  width: 300px;
  height: 100px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoAnimationImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const BackShodowLogo = styled.div`
  width: 90%;
  height: 10%;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 0 0 30px 40px #131312;
`;
