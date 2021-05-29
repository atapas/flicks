import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Book } from 'react-feather';

import Filter from './Filter';

const List = styled.li`
    display: inline-block;
    margin-right: 1rem;
`;

const ListContainer = styled.ul`
  float: right;
`;

export default function Header(props) {
  return (
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
          <Book size={32}/>
          <h1 style={{ display: `inline` }}>{props.title}</h1>
        </Link>
        <ListContainer>
          <Filter />
        </ListContainer>
      </header>
  )
}