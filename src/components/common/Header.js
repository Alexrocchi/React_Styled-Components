import React, {useState, useContext} from 'react';
import styled, {ThemeContext} from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import { Toggle } from './Toggle';

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background-image: linear-gradient(to right, ${props => props.theme.primaryColor}, ${props => props.theme.secondaryColor});
    border-bottom: 3px solid ${props => props.theme.secondaryColor};
`;

const Menu = styled.nav`
    display: ${p => p.open ? 'block' : 'none'};
    font-family: 'Open Sans';
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    pad: 8px;
    box-sizing: border-box;
    border-bottom: 3px solid ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.bodyBackgroundColor};
    
    @media(width >= 768px){
        position: relative;
        width: initial;
        border-bottom: none;
        margin: auto 0 auto auto;
        display: flex;
        background: none;
        left: initial;
        top: initial;
    }
`;

// To overwrite styles from a styled component pass styled(component)
/* const MenuAlt = styled(Menu)`
    border-top: 5px solid black;
`; */

// Style a non styled component (React component)
const Link = ({isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    )
}

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: 0 auto;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'};
    color: ${props => props.theme.bodyFontColor};
`;

const MobileMenuIcon = styled.div`
    margin: auto 0 auto auto;
    width: 25px;
    min-width: 25px;
    padding: 5px;
    > div{
        height: 3px;
        background-color: ${props => props.theme.bodyFontColor};
        margin: 5px 0;
        width: 100%;
    }

    @media(width >= 768px){
        display: none;
    }
`;

export function Header() {
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const {id, setTheme} = useContext(ThemeContext);

    return (
        <HeaderWrapper>
            <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
                <div></div>
                <div></div>
                <div></div>
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to={"/"} isActive={pathname === '/'}>Home</StyledLink>
                <StyledLink to={"/login"} isActive={pathname === '/login'}>Login</StyledLink>
                <Toggle isActive={id === 'dark'} onToggle={setTheme}></Toggle>
            </Menu>
        </HeaderWrapper>
    )
}