import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../API/MOCK_DATA";

import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";

const PokemonList = () => {
  /** 포켓몬 전체 카드 리스트 UI */
  return (
    <Container>
      {MOCK_DATA.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
      <ToastContainer
        position="top-center"
        limit={1}
        closeButton={false}
        autoClose={1000}
        theme="dark"
        transition={Slide}
      />
      ;
    </Container>
  );
};

export default PokemonList;

/** styled component */
const Container = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
