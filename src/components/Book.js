import React from "react";
import styled from "styled-components";
import ReactStars from "react-stars";
import _ from "lodash";
import { Link } from "gatsby";

import Topic from "./Topic";

const Container = styled.div`
    border: 1px solid #4e4e4e;
    border-radius: 4px;
    padding: 0.5rem;
    width: 250px;
    min-height: 450px;
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

const Book = (props) => {
    const book = props.book;
    return (
        <Container>
            <Link to={`/${_.kebabCase(book.title)}`}>
                <Topic name={book.topic} />
                <div>
                    {book.cover && (
                        <ResponsiveImage
                            src={book.cover}
                            alt={`${book.title}`}
                        />
                    )}
                </div>
                <Title>{book.title}</Title> by{" "}
                <span>{book.author.join(", ")}</span>
                <p>{book.subtitle}</p>
                <ReactStars
                    count={5}
                    value={book.rating}
                    size={24}
                    color2={"#00ebff"}
                    edit={false}
                />
            </Link>
        </Container>
    );
};

export default Book;
