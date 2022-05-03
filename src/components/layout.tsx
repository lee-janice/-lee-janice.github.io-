import React from 'react'
import { GlobalStyle, styled } from '../styles/theme'
import DarkModeToggler from './darkmodeToggler'
import NavBar from './navbar'

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
    <NavBar />
    <main className="content" role="main">
      {children}
    </main>
    <StyledFooter className="footer">
      © {new Date().getFullYear()},{` `}
      <a href="https://lee-janice.github.io">a cozy space</a>. Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>.
    </StyledFooter>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </>
)

export default Layout