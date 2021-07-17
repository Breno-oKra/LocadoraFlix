import React from "react";
import { SetLeftStyle, SetRightStyle } from "./Sets.style";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
interface SetCrollProps {
  scrolRef: any;
}
export const SetLeft: React.FC<SetCrollProps> = ({ scrolRef }) => {
  const refLeft = scrolRef;
  function moveLeft() {
    refLeft.current.scrollLeft = refLeft.current.scrollLeft - 350;
  }
  return (
    <SetLeftStyle onClick={moveLeft}>
      <ArrowBackIos fontSize="large" color="action" />
    </SetLeftStyle>
  );
};
export const SetRight: React.FC<SetCrollProps> = ({ scrolRef }) => {
  const refRight = scrolRef;
  function moveRight() {
    console.log(refRight.current.scrollLeft);
    refRight.current.scrollLeft = refRight.current.scrollLeft + 350;
  }
  return (
    <SetRightStyle onClick={moveRight}>
      <ArrowForwardIos fontSize="large" color="action" />
    </SetRightStyle>
  );
};
