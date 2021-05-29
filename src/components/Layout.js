import React from "react";
import Header from './Header';
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { GlobalStyles } from '../styles/GlobalStyles';

const Container = styled.div`
  max-width: 90%;
  margin: 1rem auto auto auto;
`;

export default function Layout({ children }) {
  const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
  );

  return (
      <>
        <GlobalStyles />
        <Container>
          <Header title={data.site.siteMetadata.title}/>
          <main>
            {children}
          </main>
        </Container>
      </>
  )
}