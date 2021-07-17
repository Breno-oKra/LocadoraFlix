import React from "react";
import {
  BoxCardBuy,
  HeaderCardBuy,
  ButtonFinallity,
  BoxTotal,
} from "./Card-totalBuys.style";
import { Typography } from "@material-ui/core";
const CartTotalBuys = () => {
  return (
    <BoxCardBuy>
      <HeaderCardBuy>
        <Typography variant="h2" component="h2">
          Total a pagar
        </Typography>
      </HeaderCardBuy>

      <Typography variant="h4" component="h4">
        qtd filmes: 8
      </Typography>
      <Typography variant="h4" component="h4">
        qtd de dias: 15
      </Typography>
      <Typography variant="h4" component="h4">
        renovação : não
      </Typography>
      <Typography variant="h4" component="h4">
        taxa de entrega: 20$
      </Typography>
      <BoxTotal>
        <Typography variant="h4" component="h4">
          Total 230$
        </Typography>
      </BoxTotal>
      <ButtonFinallity>Finalizar Compra</ButtonFinallity>
    </BoxCardBuy>
  );
};

export default CartTotalBuys;
