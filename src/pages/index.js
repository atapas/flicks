import * as React from "react";
import styled from "styled-components";
import BookList from "../components/BookList";
import Layout from "../components/Layout";

const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

// markup
const IndexPage = () => {
    return (
        <Layout>
            <Main>
                <BookList />
            </Main>
        </Layout>
    );
};

export default IndexPage;
