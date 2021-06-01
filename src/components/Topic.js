import React from "react";
import styled from "styled-components";

import { getTopicColor } from "../util";

const Container = styled.span`
    margin-bottom: 0.5rem;
    float: right;
    padding: 0.3rem;
    background-color: ${(props) => props.bg};
    color: ${(props) => props.fg};
    font-size: ${(props) => props.size};
    border-radius: 5px;
`;

const Topic = (props) => {
    const topicName = props.name;
    const topicColor = getTopicColor(topicName);
    const size = props.size || '20px';

    return (
        <Container 
            bg={topicColor.bg} 
            fg={topicColor.fg} 
            size={size} >
            {topicName}
        </Container>
    );
};

export default Topic;
