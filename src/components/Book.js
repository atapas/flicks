import React from 'react';

import styled from "styled-components"; 

const Container = styled.div`
    border: 1px solid #4e4e4e;
    border-radius:4px;
    padding: 0.5rem;
    width: 200px;
    height: 380px;
    margin: 1rem;
`;

const ResponsiveImage = styled.img`
    width: 100%;
    height: auto;
`;

const Title = styled.span`
    font-size: 20px;
    font-weight: 500;
`;

const Topic = styled.span`
    margin-bottom: 0.5rem;
    float: right;
    padding: 0.3rem;
    background-color: #e3fa06de;
    color: #000000;
    border-radius: 5px;
`;

const Book = props => {

    const book = props.book;

    return(
        <Container>
            <Topic>{book.topic}</Topic>
            <div>
            {
                book.cover &&
                    <ResponsiveImage src={book.cover} alt={`${book.title}`} />
            }
            </div>
            <Title>{book.title}</Title> { ' ' }
            by <span>{book.author.join(', ')}</span>
            <p>{book.subtitle}</p>
            <div>{book.rating}</div>
        </Container>
    )
}

export default Book;