import styled from "styled-components";
import { Button, Card } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export const CarScale = styled("label")`
  transition: 1s;
`;

export const CardStyles = styled.div`
  width: 320px;
  height: 250px;
  min-width: 320px;
  min-height: 250px;

  perspective: 1000px;
  .flipper {
    transform: rotateY(180deg);
    .image-front {
      opacity: 0.3;
      pointer-events: none;
    }
  }
  &:hover .noFlipper {
    .image-front {
      border: 3px solid #fff;
      box-shadow: 0px 0px 10px #fff, 0px 0px 5px #fff inset;
    }
    .buttonCard {
      z-index: 1;
      color: #fff;
    }
  }
`;
export const CardStylesButton = styled.label`
  width: 320px;
  height: 250px;
  perspective: 1000px;
`;
export const CardFlip = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;
export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;
export const CardBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  overflow: hidden;

  div {
    color: #fff;
    font-size: 18px;
    z-index: 1;
  }
`;
export const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
export const SkeletonCardStyle = styled(Skeleton)`
  opacity: 1;
`;
export const SkeletonContainer = styled.div`
  width: 320px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.1);
`;
