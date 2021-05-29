import React from 'react';
import styled from "styled-components";
import { Filter } from 'react-feather';

const Container = styled.div`
    dispaly: inline-block;
`;

const FilterLabel = styled.span`
    font-size: 20px;
    margin-left: 0.2rem;
`;

const showFilters = event => {
    console.log('Show Filter UI');
}

const FilterBooks = () => {

    return(
        <Container>
            <a href="#" onClick={showFilters}>
                <Filter size={18} />
                <FilterLabel>Filter Books</FilterLabel>
            </a>
            
        </Container>
    )
}

export default FilterBooks;