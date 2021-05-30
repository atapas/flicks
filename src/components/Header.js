import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Book, GitHub } from 'react-feather';

import SearchBooks from './SearchBooks';

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
`;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;


export default function Header(props) {
  return (
      <Container>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
          <Book size={32}/>
          <h1 style={{ display: `inline` }}>{props.title}</h1>
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