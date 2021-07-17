import React, { useState } from "react";
import {
  CarScale,
  CardStyles,
  CardFlip,
  CardFront,
  CardBack,
  CardImage,
} from "./Cards.style";
import TemporizadorContainer from "../animations/temporizador/temporizador";
import { ContainerButton } from "./ButtonsCardStyle";
import { ButtonCardStar, ButtonCardCart } from "./ButtonCard";
import { Rating } from "@material-ui/lab";
interface CardsProps {
  title: string;
  description: string;
  image: string;
  rating: number;
  favorite: boolean;
}

const Cards: React.FC<CardsProps> = ({
  title,
  description,
  image,
  rating,
  favorite,
}) => {
  const [activeCard, setActiveCard] = useState<boolean>(false);
  return (
    <CarScale>
      <CardStyles>
        <CardFlip className={activeCard ? "flipper" : "noFlipper"}>
          <CardFront
            onClick={() => {
              setActiveCard(true);
              setTimeout(() => {
                setActiveCard(false);
              }, 10000);
            }}
          >
            <CardImage src={image} className="image-front" loading="lazy" />
          </CardFront>
          <CardBack>
            <div>
              <h3>{title}</h3>
              <Rating name="size-large" value={rating} size="large" />
              <p>{description}</p>
            </div>
            {activeCard ? (
              <ContainerButton>
                <ButtonCardCart />
                <ButtonCardStar favorit={favorite} />
              </ContainerButton>
            ) : (
              ""
            )}

            {activeCard ? <TemporizadorContainer /> : ""}
          </CardBack>
        </CardFlip>
      </CardStyles>
    </CarScale>
  );
};
export default Cards;
