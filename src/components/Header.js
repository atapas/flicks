import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const List = styled.li`
    display: inline-block;
    margin-right: 1rem;
`;

const ListContainer = styled.ul`
  float: right;
`;

const ListLink = props => (
    <List>
      <Link to={props.to}>{props.children}</Link>
    </List>
);

export default function Header(props) {
  return (
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
          <h1 style={{ display: `inline` }}>{props.title}</h1>
        </Link>
        <ListContainer>
          <ListLink to="/about/">About</ListLink>
        </ListContainer>
      </header>
  )
}