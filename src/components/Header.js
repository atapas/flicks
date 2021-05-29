import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Book, GitHub, Download, Filter } from 'react-feather';

const ListContainer = styled.ul`
  float: right;
  margin: 0;
  padding: 0;
  display: inline-block;
`;


const showFilters = event => {
  console.log('Show Filter UI');
}

export default function Header(props) {
  return (
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
          <Book size={28}/>
          <h1 style={{ display: `inline` }}>{props.title}</h1>
        </Link>
        <ListContainer>
          <a href="#" onClick={showFilters} style={{marginRight:'5px'}}>
            <Filter size={28} />
          </a>
          <a href="https://github.com/atapas/flicks" 
            target="_blank" 
            rel="noreferrer"
            style={{marginRight:'5px'}}>
            <GitHub size={28} />
          </a>
          <a href="https://www.npmjs.com/package/gatsby-source-harperdb" target="_blank" rel="noreferrer">
            <Download size={28} />
          </a>
        </ListContainer>
      </header>
  )
}