import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Book from "./Book";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const BookList = () => {
    const data = useStaticQuery(graphql`
        {
            allBooks {
                nodes {
                    title
                    id
                    author
                    cover
                    description
                    isbn
                    pages
                    published
                    publisher
                    rating
                    subtitle
                    topic
                    website
                }
            }
        }
    `);
    const books = data.allBooks.nodes;
    books.sort((a, b) => {
        return b.rating - a.rating;
    });
    console.log(books);
    return (
        <Container>
            {books.map((book, index) => (
                <Book key={index} book={book} />
            ))}
        </Container>
    );
};

export default BookList;
