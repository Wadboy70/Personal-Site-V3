import React from 'react';
import Header from './header';
import GlobalStyle from '../globalStyles';
import styled from 'styled-components';

const PageContent = styled.section`
    padding: 5%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Layout = ({children}) => {
    return (
        <div>
            <GlobalStyle/>
            <PageContent>
                <Header/>
                {
                    children && children
                }
            </PageContent>
        </div>
    )
};

export default Layout;