import React, { useState } from 'react'
import { Link } from 'gatsby'
import { styled } from '../styles/theme'

// style navigation bar using styled-components
const StyledNav = styled.nav`
    padding-top: 0px;

    @media screen and (max-width: 1100px) {
        display: none;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 16px;
        margin-right: 48px;
        margin-left: auto;
        font-variant: small-caps;

        a {
            background: none;
        }
    }
`

// burger for mobile 
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 25px;
  display: none;
  z-index: 100;

  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    display: inline-block;
    width: 2rem;
    height: 1px;
    background-color: ${({ open }) => open ? 'red' : 'var(--fontColor)'};
    border-radius: 10px;
    transform-origin: 1px;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

// navigation for mobile
const MobileNav = styled.ul`
    display: none;
    margin-top: 0px;
    border-bottom: 0.5px solid var(--fontColor); 
    border-left: 0.5px solid var(--fontColor); 

    ul {
        list-style-type: none;
        padding: 0 0 25px 10px;
        grid-auto-flow: column;
        column-count: 1;
        column-width: 125px;
        -moz-column-count: 2;
        -webkit-column-count: 2;
    }

    li {
        padding: 5px;
        margin-right: auto;
        font-variant: small-caps;

        a {
        background: none;
        }
    }

    @media (max-width: 1100px) {
        display: ${({ open }) => open ? 'flex' : 'none'};
        background-color: var(--mainBg);
        position: fixed;
        top: 0;
        right: 0;
        height: 264px;
        width: 222px;
        padding-top: 3.5rem;
        z-index: 99 ;
        li {
            color: var(--fontColor);
        }
    }
`

const NavBar: React.FC = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <MobileNav open={open}>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/topics`}>Topics</Link>
                    </li>
                    <li>
                        <Link to={`/essays`}>Essays</Link>
                    </li>
                    <li>
                        <Link to={`/notes`}>Notes</Link>
                    </li>
                    <li>
                        <Link to={`/journal`}>Journal</Link>
                    </li>
                    <li>
                        <Link to={`/about-me`}>About Me</Link>
                    </li>
                    <li>
                        <Link to={`/about-this-site`}>About This Site</Link>
                    </li>
                </ul>
            </MobileNav>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div /> <div /><div />
            </StyledBurger>
            <StyledNav className="navigation">
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li> | </li>
                    <li>
                        <Link to={`/topics`}>Topics</Link>
                    </li>
                    <li> | </li>
                    <li>
                        <Link to={`/essays`}>Essays</Link>
                    </li>
                    <li>
                        <Link to={`/notes`}>Notes</Link>
                    </li>
                    <li>
                        <Link to={`/journal`}>Journal</Link>
                    </li>
                    <li> | </li>
                    <li>
                        <Link to={`/about-me`}>About Me</Link>
                    </li>
                    <li>
                        <Link to={`/about-this-site`}>About This Site</Link>
                    </li>
                </ul>
            </StyledNav>
        </div>
    )
}

export default NavBar