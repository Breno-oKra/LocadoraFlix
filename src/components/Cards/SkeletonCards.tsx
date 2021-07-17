import React from "react";
import { SkeletonCardStyle, SkeletonContainer } from "./Cards.style";

const SkeletonCard = () => {
  return (
    <SkeletonContainer>
      <SkeletonCardStyle
        variant="rect"
        width={250}
        height={320}
        animation={"wave"}
      />
    </SkeletonContainer>
  );
};
export default SkeletonCard;
