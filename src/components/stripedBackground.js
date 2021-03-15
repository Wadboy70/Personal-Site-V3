import React from 'react';
import styled from 'styled-components';

const StripedBackground = () => {
    const Backing = styled.div`
        margin: 0;
        padding: 0;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -5;
    `;
    return(
        <Backing>

        </Backing>
    );
};

export default StripedBackground;