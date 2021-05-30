import React from "react";
import styled from "styled-components";
import ReactStars from 'react-stars';
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BookDetails = ({ data }) => {
    const details = data.books;
    console.log(details);

    return (
        <Layout>
            <Container>
                <h1>{details.title}</h1>
                <p>
                    <span>By</span> {} <b>{details.author.join(', ')}</b>
                </p>
                <img
                    src={details.cover}
                    alt={details.title}
                    width="40%"
                    height="auto"
                />

                <ReactStars
                    count={5}
                    value={details.rating}
                    size={24}
                    color2={'#00ebff'}
                    edit={false} />

                <p>
                    <span><b>Pages</b>: {details.pages}</span> {' | '}
                    <span><b>Publisher</b>: {details.publisher}</span> {' | '}
                    <span><b>ISBN</b>: {details.isbn}</span> {' | '}
                    <a 
                        href={details.website} 
                        target="_blank" 
                        rel="noreferrer">
                        Website
                    </a>
                </p>

                <p style={{fontSize: '22px'}}>{details.description}</p>
            </Container>
        </Layout>
    );
};

export const query = graphql`
    query ($title: String!) {
        books(title: { eq: $title }) {
            author
            cover
            description
            id
            isbn
            pages
            published
            publisher
            rating
            subtitle
            title
            topic
            website
        }
    }
`;

export default BookDetails;
