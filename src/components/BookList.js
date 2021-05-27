import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

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
    console.log(books);
    return (
        <div className="container">
            {books.map((book, index) => (
                <span key={index}>{book.title}</span>
                ))
            }
        </div>
    )
};

export default BookList;