import React from "react";
import Header from "./Header";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
`;

const Content = styled.main`
    flex-grow: 1;
    overflow: auto;
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
                <Header title={data.site.siteMetadata.title} />
                <Content>{children}</Content>
            </Container>
        </>
    );
}
