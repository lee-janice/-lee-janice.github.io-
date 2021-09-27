import React from 'react'
import { Link } from 'gatsby'
import { GlobalStyle, styled } from '../styles/theme'
import DarkModeToggler from '../components/darkmode-toggler'

const StyledNav = styled.nav`
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

const StyledFooter = styled.footer`
  padding-bottom: 36px;
`

interface Props {
  readonly title?: string
  readonly children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <GlobalStyle />
    <DarkModeToggler />
    <StyledNav className="navigation">
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/topics`}>Topics</Link>
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
    </StyledNav>
    <main className="content" role="main">
      {children}
    </main>
    <StyledFooter className="footer">
      © {new Date().getFullYear()},{` `}
      <a href="https://lee-janice.github.io">a cozy space</a>. Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>.
    </StyledFooter>
  </>
)

export default Layout