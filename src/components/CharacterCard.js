import React from "react";
import styled from "styled-components";

const CardDiv = styled.div `
color: blue;
width: 500px;
max-height: 300px;
display: inline-block;
text-align:center;
margin-bottom: 20px;
`;

const ListDiv = styled.div `
background: pink;
text-align:center;
color: blue;
width: 800px;
max-height: 300px;
display: inline-block;
align-items: center;
justify-content: space-between;
margin: 40px;
`;

const CharacterCard = ({data}) => {
  console.log("this is data in CCard",data)
  return (
  <div>
    {data.map(data => {
  
      return (
        <ListDiv>
        <CardDiv key = {data.id}>
          <h2>Name: {data.name}</h2>
          <h3>Status: {data.status}</h3>
          <h3>Species: {data.species}</h3>
        </CardDiv>
        </ListDiv>
      );
    })}



  </div>
  )
};

export default CharacterCard;



