import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderContainer = styled.nav`
    width: 100%;
    background-color: #FFFFFF;
    height: 10vh;
`;
const NavListItem = styled.li`
    margin-right: 1rem;
`;
const NavLink = styled(Link)`
    color: #999;
    &.activePage{
        color: black;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <ul>
                <NavListItem>
                    <NavLink to = '/' activeClassName = "activePage">Home</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to = '/blog' activeClassName = "activePage">Blog</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to = '/about' activeClassName = "activePage">About</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to = '/projects' activeClassName = "activePage">Projects</NavLink>
                </NavListItem>
            </ul>
        </HeaderContainer>
    )
};

export default Header;