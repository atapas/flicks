import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import * as JsSearch from "js-search";
import _ from "lodash";

const SearchBox = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: #071f2b;
    border: 1px solid #FFFFFF;
    border-radius: 3px;
    ::placeholder {
        color: #d1d1d1;
    }
`;

const Result = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 14px;
    top: 76px;
    z-index: 50;
    background-color: #0b0f31;
    max-height: 450px;
    overflow-y: auto;
    border-radius: 4px;
    padding: 10px;
    border: 1px solid #acacac;
    @media (max-width: 500px) {
        top: 121px;
        width: 85%;
    }
`;

const ResultRow = props => {
    const item = props.item;
    return(
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div>
                <img 
                    src={item.cover} 
                    alt={item.title} 
                    width="40px" 
                    height="40px"/>
            </div>
            <div style={{'margin': '0 auto auto 0.5rem'}}>
                <span style={{fontSize: '20px', color: '#FFFFFF', fontWeight: 'bold'}}>
                    {item.title} by {item.author.join(', ')}
                </span>
                <div style={{color: '#acacac', marginTop: '3px'}}>{item.subtitle}</div>
            </div>
        </div>
    )
}

const SearchBooks = () => {
    const data = useStaticQuery(graphql`
        {
            allBooks {
                nodes {
                    cover
                    title
                    id
                    author
                    subtitle
                }
            }
        }
    `);
    const bookInfo = data.allBooks.nodes;
    console.log({ bookInfo });

    const [result, setResult] = useState([]);
    const [search, setSearch] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        rebuildIndex(bookInfo);
    }, [bookInfo]);

    const rebuildIndex = (input) => {
        const dataToSearch = new JsSearch.Search("id");
        /**
         *  defines a indexing strategy for the data
         * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
         */
        dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
        /**
         * defines the sanitizer for the search
         * to prevent some of the words from being excluded
         *
         */
        dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
        /**
         * defines the search index
         * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
         */
        dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id");

        dataToSearch.addIndex("title"); 
        dataToSearch.addIndex("subtitle");
        dataToSearch.addIndex("author");
        dataToSearch.addDocuments(input); // adds the data to be searched
        setSearch(dataToSearch);
        console.log({ dataToSearch });
    };

    const changeSearchQuery = (event) => {
        event.preventDefault();
        const query = event.target.value;
        const queryResult = search.search(query);
        setSearchQuery(query);
        setResult([...queryResult]);
        console.log({ queryResult });
        console.log({ result });
    };

    return (
        <>
            <SearchBox
                type="text"
                placeholder="Search Books"
                autoComplete="off"
                value={searchQuery}
                onChange={(event) => changeSearchQuery(event)}
            />
            {result.length > 0 && (
                <Result>
                    {result.map((item) => (
                        <div>
                            <ul key={item["id"]}>
                                <li>
                                    <Link to={`/${_.kebabCase(item.title)}`}>
                                        <ResultRow item={item} />    
                                    </Link>
                                </li>
                            </ul>
                            <hr />
                        </div>
                    ))}
                </Result>
            )}
        </>
    );
};

export default SearchBooks;
