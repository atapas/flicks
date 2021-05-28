import * as React from "react";
import styled from "styled-components";
import Categories from '../components/Categories';
import BookList from "../components/BookList";
import Layout from "../components/Layout";

const Main = styled.div`
  display: flex;
`;

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <Categories />
        <BookList />
      </Main>
    </Layout>
  );
};

export default IndexPage;
