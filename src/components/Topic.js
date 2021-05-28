import React from 'react';
import styled from "styled-components";

import { getTopicColor } from '../util';

const Container = styled.span`
    margin-bottom: 0.5rem;
    float: right;
    padding: 0.3rem;
    background-color: ${props => props.bg};
    color: ${props => props.fg};
    border-radius: 5px;
`;

const Topic = props => {
    const topicName = props.name;
    const topicColor = getTopicColor(topicName);

    return(
        <Container 
            bg={topicColor.bg} 
            fg={topicColor.fg}>{topicName}</Container>
    )
}

export default Topic;