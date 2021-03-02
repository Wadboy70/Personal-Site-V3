import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.nav`
    width: 100%;
    background-color: #FFFFFF;
    height: 10vh;
`;
const NavListItem = styled.li`
    margin-right: 1rem;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <ul>
                <NavListItem>
                    <Link to = '/'>Home</Link>
                </NavListItem>
                <NavListItem>
                    <Link to = '/blog'>Blog</Link>
                </NavListItem>
                <NavListItem>
                    <Link to = '/about'>About</Link>
                </NavListItem>
                <NavListItem>
                    <Link to = '/projects'>Projects</Link>
                </NavListItem>
            </ul>
        </HeaderContainer>
    )
};

export default Header;