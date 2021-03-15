import React from 'react';
import styled from 'styled-components';

const ComingSoon = () => {
    
    const ComingSoonContainer = styled.div`
        width: inherit;
        display: flex;
        justify-content: center;
        align-items:  center;
        flex-grow: 1;
    `;
    const ComingSoonTitle = styled.h2`

    `;

    return(
        <ComingSoonContainer>
            <ComingSoonTitle>
                This page is in the works!
            </ComingSoonTitle>
        </ComingSoonContainer>
    );
};

export default ComingSoon;