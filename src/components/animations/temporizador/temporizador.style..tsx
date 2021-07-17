import styled from "styled-components";

export const ContainerTemporizadorStyle = styled("div")`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto 0 0 0;

  @keyframes example {
    from {
      width: 100%;
    }
    to {
      width: 0px;
    }
  }

  /* The element to apply the animation to */
  div {
    width: 100%;
    height: 100%;
    background-color: red;
    animation-name: example;
    animation-duration: 13s;
  }
`;
