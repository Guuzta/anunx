import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#fffff'
        },
        background: {
            default: '#dad6d6ff',
            paper: 'white'
        }
    }
})

export default theme