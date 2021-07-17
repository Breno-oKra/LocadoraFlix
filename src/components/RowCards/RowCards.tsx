import React, { useRef, useEffect } from "react";
import { RowCardContainerStyle } from "./RowCards.style";
import Cards from "../Cards/Cards";
import { SetLeft, SetRight } from "./sets/Sets";
import SkeletonCard from "../Cards/SkeletonCards";
import { RowContainer, TitleRow } from "./RoeContainerStyle";
const RowCardContainer = () => {
  const myRef = useRef<any>({});
  useEffect(() => {
    if (myRef !== null) {
      myRef.current.addEventListener("scroll", animatedCardsScroll);
    }
  }, [myRef]);
  function animatedCardsScroll() {
    myRef.current.querySelectorAll("label").forEach((card: any) => {
      if (card.getBoundingClientRect().right < window.innerWidth + 20) {
        card.style.transform = "translate3d(0,0,0)";
      } else {
        card.style.transform = "translate3d(0,-100px,0)";
      }
    });
  }

  return (
    <RowContainer>
      <TitleRow>filmes Romanticos</TitleRow>

      <RowCardContainerStyle ref={myRef}>
        <Cards
          title="Brinquedo Assassino"
          description="filme do garay"
          image="https://i.ytimg.com/vi/kJbgeaNgEyE/maxresdefault.jpg"
          rating={3}
          favorite={false}
        />
        <Cards
          title="Exterminador do Futuro"
          description="filme do garay"
          image="https://jeonline.com.br/site/uploads/posts/como-o-exterminador-do-futuro-se-tornou-um-dos-maiores-classicos-do-cinema-je-online-8013cf805c8a368772d986471f621c3b.jpg"
          rating={3}
          favorite={false}
        />
        <Cards
          title="Bad Boys"
          description="filme do garay"
          image="https://s1.dmcdn.net/v/PaaS-1SUoQE95u1Rr/x1080"
          rating={2}
          favorite={false}
        />
        <Cards
          title="Stars Wars a ameaça fantasma"
          description="filme do garay"
          image="https://flixable.b-cdn.net/disney-plus/large/pt/star-wars-the-phantom-menace-episode-i.png"
          rating={5}
          favorite={false}
        />
        <Cards
          title="O poderoso chefão"
          description="filme do garay"
          image="https://www.protocoloxp.com.br/wp-content/uploads/2019/01/the-godfather-protocoloxp.jpeg"
          rating={2}
          favorite={false}
        />
        <Cards
          title="O magico de Oz"
          description="O magico de Oz"
          image="http://portalcaneca.com.br/wp-content/uploads/2014/08/o-m%C3%A1gico-de-oz-poster.jpg"
          rating={5}
          favorite={false}
        />
        <Cards
          title="Clube dos Cinco "
          description="filme do garay"
          image="https://cinepop.com.br/wp-content/uploads/2017/01/clubedoscinco_2.jpg"
          rating={3}
          favorite={false}
        />
        <Cards
          title="O Iluminado"
          description="filme do garay"
          image="https://i.ytimg.com/vi/fnzrKElLAOg/maxresdefault.jpg"
          rating={2}
          favorite={false}
        />
        <Cards
          title="Scarface"
          description="filme do garay"
          image="https://www.thehollywoodnews.com/wp-content/uploads/scarface-gold.jpg"
          rating={4}
          favorite={false}
        />
        <Cards
          title="Dirty Dancing-Ritmo Quente"
          description="filme do garay"
          image="http://maeaocubo.com.br/wp-content/uploads/2011/04/dirty-dancing.jpg"
          rating={3}
          favorite={false}
        />
        <Cards
          title="O Bebê de Rosemary (1968)"
          description="filme do garay"
          image="https://quizlandia.club/wp-content/uploads/2019/09/O-Beb%C3%AA-de-Rosemary-1024x576.jpg"
          rating={4}
          favorite={false}
        />
        <Cards
          title="Tempos Modernos (1936)"
          description="filme do garay"
          image="https://bakunin-libreflix.koletivo.org/covers/media/fa705070-de2d-11e9-b855-5d075484e0d1tempos-modernos.jpg"
          rating={5}
          favorite={false}
        />
        <Cards
          title="E.T. O Extraterrestre"
          description="filme do garay"
          image="https://wallpapercave.com/wp/C4Va9Tt.jpg"
          rating={1}
          favorite={false}
        />
        <Cards
          title="it"
          description="filme do garay"
          image="https://images2.alphacoders.com/112/1124025.jpg"
          rating={5}
          favorite={false}
        />
      </RowCardContainerStyle>
      {/**
        <SkeletonCard />
        <SkeletonCard /> 

      */}

      <SetLeft scrolRef={myRef} />

      <SetRight scrolRef={myRef} />
    </RowContainer>
  );
};
export default RowCardContainer;
