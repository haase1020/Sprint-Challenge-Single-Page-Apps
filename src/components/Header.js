import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavStyle = styled.nav`
font-color: blue;
justify-content: spaced-between;
// align-items: center;
height: 35px;
text-decoration: none;
padding: 20px;

`;

export const HeaderStyle = styled.div`

width: 28%;
display: flex;

justify-content: space-evenly;
text-align: center;
padding: 20px;
margin: 0 auto;
text-decoration: none;

`

const Header = props =>{
  return (
    <header className = "ui centered">
      <h1 className = "ui center">Rick &amp; Morty Fan Page</h1>
      <NavStyle>
        <HeaderStyle>
          <Link to = "/">Home</Link>
          <Link to = "/CharacterList">Characters</Link>
        </HeaderStyle>
      </NavStyle>

    </header>
  );
};

export default Header;



