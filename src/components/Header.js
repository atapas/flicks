import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GitHub, Book } from 'react-feather';

import SearchBooks from './SearchBooks';

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Title = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff4f6e;
`;



export default function Header(props) {
  return (
      <Container>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
          <Book color='#ff4f6e' size={28} />
          <Title>{props.title}</Title>
        </Link>
        <ListContainer>
          <SearchBooks />
          <a href="https://github.com/atapas/flicks" 
            target="_blank" 
            rel="noreferrer">
            <GitHub size={28} />
          </a>
        </ListContainer>
      </Container>
  )
}