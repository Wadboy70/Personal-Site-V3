import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderContainer = styled.nav`
    max-width: 100vw;
    background-color: #FFFFFF;
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul{
        height: 100%;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const NavListItem = styled.li`
    margin-right: 1rem;
    margin-bottom: 0px;
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