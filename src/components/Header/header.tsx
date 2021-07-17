import React from "react";
import {
  HeaderContainerStyle,
  HeaderStyle,
  BoxIconsHeader,
} from "./header.style";
import {
  Movie,
  ShoppingCart,
  AccountCircle,
  StarBorder,
  FiberNew,
} from "@material-ui/icons";
const Header = () => {
  return (
    <HeaderContainerStyle className="containerHeader">
      <HeaderStyle>
        <BoxIconsHeader color="primary" fontSize="large">
          <FiberNew />
        </BoxIconsHeader>
        <BoxIconsHeader color="primary" fontSize="large">
          <AccountCircle />
        </BoxIconsHeader>
        <BoxIconsHeader color="primary" fontSize="large">
          <ShoppingCart />
        </BoxIconsHeader>
        <BoxIconsHeader color="primary" fontSize="large">
          <Movie />
        </BoxIconsHeader>
        <BoxIconsHeader color="primary" fontSize="large">
          <StarBorder />
        </BoxIconsHeader>
      </HeaderStyle>
    </HeaderContainerStyle>
  );
};

export default Header;
