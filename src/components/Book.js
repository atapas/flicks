import React from 'react';
import styled from "styled-components"; 

import Topic from './Topic';

const Container = styled.div`
    border: 1px solid #4e4e4e;
    border-radius:4px;
    padding: 0.5rem;
    width: 250px;
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

const Book = props => {
    const book = props.book;
    return(
        <Container>
            <Topic name={book.topic} />
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