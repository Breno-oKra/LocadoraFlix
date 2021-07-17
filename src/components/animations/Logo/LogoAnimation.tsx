import React, { useState } from "react";
import {
  LogoAnimationContainer,
  LogoAnimationImage,
  BackShodowLogo,
} from "./LogoAnimation.style";
const MotionAnimated = () => {
  return (
    <LogoAnimationContainer>
      <BackShodowLogo />
      <LogoAnimationImage src="https://fontmeme.com/permalink/210623/50c1ddc2121c6cfd7006e3b4d8c2e665.png" />
    </LogoAnimationContainer>
  );
};
export default MotionAnimated;
