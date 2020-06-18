import './theme.css'

const colors = {
    '--color-white': '#FFF',
    '--color-black': '#000',
    '--color-gray': '#BDBDBD',
    '--color-granite-gray': '#666667',
    '--color-picton-blue': '#3AABEA',
    '--color-milk': '#FFFDF5',
    '--color-eerie-black': '#161625',
    '--color-dark-gunmetal': '#1E1E30',
    '--color-aurometalsaurus': '#6C757D'
}

export const lightTheme = {
    '--color-bg': colors['--color-white'],
    '--color-text-primary': colors['--color-black'],
    '--color-text-secondary': colors['--color-granite-gray'],
    '--color-primary': colors['--color-picton-blue'],
    '--color-secondary': colors['--color-milk'],
    '--color-divider': colors['--color-gray'],
    '--color-input': colors['--color-white']
}

export const darkTheme = {
    '--color-bg': colors['--color-eerie-black'],
    '--color-text-primary': colors['--color-gray'],
    '--color-text-secondary': colors['--color-granite-gray'],
    '--color-primary': colors['--color-picton-blue'],
    '--color-secondary': colors['--color-dark-gunmetal'],
    '--color-divider': colors['--color-gray'],
    '--color-input': colors['--color-dark-gunmetal']
}