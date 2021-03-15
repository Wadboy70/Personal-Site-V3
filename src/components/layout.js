import React from 'react';
import Header from './header';
import GlobalStyle from '../globalStyles';
import styled from 'styled-components';

const PageContent = styled.section`
    padding: 5%;
    display: flex;
    flex-direction: column;
`;
const Container = styled.div`
    min-height: 100vh;
`;

const Layout = ({children}) => {
    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            <PageContent>
                {
                    children && children
                }
            </PageContent>
        </Container>
    )
};

export default Layout;