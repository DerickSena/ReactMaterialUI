import { createTheme } from '@mui/material';


export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: white[700],
            dark: white[800],
            light: white[500],
            contrastText: '#ffffff',
        },
        secondary: {
            main: black[800] ,
            dark: black[400],
            light: black[300],
            contrastText: '#ffffff',
        },
        background: {
            default:'#f7f6f3' ,
            paper:'#ffffff' ,
        }
    }
});