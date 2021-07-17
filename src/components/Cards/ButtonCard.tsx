import React, { useState } from "react";
import Lottie from "react-lottie";
import AnimationData from "../../animations/animationStart.json";
import { ButtonCardStyle } from "./ButtonsCardStyle";
import { StarBorder, ShoppingCart } from "@material-ui/icons";

interface ButtonCardStarProps {
  favorit: boolean;
}

export const ButtonCardStar: React.FC<ButtonCardStarProps> = ({ favorit }) => {
  const [clickStart, setClickStart] = useState<boolean>(favorit);
  const [animatedState, setAnimatedState] = useState({
    isStopped: false,
    isPaused: false,
    direction: -1,
  });
  console.log(favorit);
  const defaultOptions = {
    loop: false,
    autoplay: favorit,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <ButtonCardStyle
      variant="contained"
      color="secondary"
      onClick={() => {
        setAnimatedState({
          ...animatedState,
          isStopped: false,
          direction: animatedState.direction === 1 ? -1 : 1,
        });
        setClickStart(!clickStart);
      }}
    >
      <Lottie
        options={defaultOptions}
        height={50}
        width={50}
        direction={animatedState.direction}
        isStopped={animatedState.isStopped}
        isPaused={animatedState.isPaused}
      />
      {/* clickStart ? "1" : <StarBorder /> */}
    </ButtonCardStyle>
  );
};

export const ButtonCardCart = () => {
  return (
    <ButtonCardStyle variant="contained" color="secondary">
      <ShoppingCart />
    </ButtonCardStyle>
  );
};
