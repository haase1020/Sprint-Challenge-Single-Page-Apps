import React from "react";
import styled from "styled-components";

export default function CharacterCard({data}) => {
  return (
  <div>
    {data.map(data => {
      return (
        <CharacterListDiv>
        <CharacterCardDiv key = {data.id}>
          <h2>Name: {data.name}</h2>
          <h3>Status: {data.status}</h3>
          <h3>Species: {data.species}</h3>
        </CharacterCardDiv>
        </CharacterListDiv>
      );
    })}



  </div>
  )
};

export default CharacterCard;



