import React from 'react'
import PropTypes from 'prop-types'

/* remixed from https://github.com/insin/gatsby-plugin-dark-mode/blob/master/src/ThemeToggler.js */ 
class ThemeToggler extends React.Component {
  state = {
    theme: typeof window !== 'undefined' ? window.__theme : null,
    darkMode: window.__theme.toString().includes('dark'),
    modernMode: window.__theme.toString().includes('modern')
  }

  componentDidMount() {
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })
    }
  }

  toggleDarkMode = (checked) => {
    this.state.darkMode = checked
  }

  toggleModernMode = (checked) => {
    this.state.modernMode = checked
  }

  toggleTheme = () => {
    window.__setPreferredTheme(
      (this.state.darkMode ? 'dark' : 'light') + '-'
        + (this.state.modernMode ? 'modern' : 'classic')
    )
  }

  render() {
    return (
      <this.props.children
        darkMode={this.state.darkMode}
        modernMode={this.state.modernMode}
        theme={this.state.theme}
        toggleDarkMode={this.toggleDarkMode}
        toggleModernMode={this.toggleModernMode}
        toggleTheme={this.toggleTheme}
      />
    )
  }
}

ThemeToggler.propTypes = {
  children: PropTypes.func.isRequired,
}

export default ThemeToggler