import React from 'react'
import ThemeToggler from './themeToggler'

const StyleToggles: React.FC = () => {
    return (
        <ThemeToggler>
            {({ theme, toggleDarkMode, toggleModernMode, toggleTheme }) => (
                <div className="theme-toggler">
                    {/* checkbox for dark mode */}
                    <label style={{ float: 'right', position: 'fixed', right: 17, bottom: 25 }}>
                        <input
                            type="checkbox"
                            checked={ theme.includes('dark') }
                            onChange={e => {toggleDarkMode(e.target.checked) ; toggleTheme() }}
                        />{' '}
                        Dark mode
                    </label>

                    {/* checkbox for modern mode */}
                    <label style={{ float: 'right', position: 'fixed', right: 5, bottom: 5 }}>
                    <input
                        type="checkbox"
                        checked={ theme.includes('modern') }
                        onChange={e => {toggleModernMode(e.target.checked) ; toggleTheme() }}
                    />{' '}
                    Modern mode
                    </label>
                </div>
            )}
        </ThemeToggler>
    )
}

export default StyleToggles