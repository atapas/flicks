import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GitHub } from 'react-feather';

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