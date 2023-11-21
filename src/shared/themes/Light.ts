import { createTheme } from '@mui/material';
import { green, grey, yellow } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: grey[800],
            dark: grey[700],
            light: grey[600],
            contrastText: '#ffffff',
        },
        secondary: {
            main: yellow[800],
            dark: yellow[800],
            light: yellow[800],
            contrastText: '#ffffff',
        },
        background: {
            default:'#f7f6f3' ,
            paper:'#ffffff' ,
        }
    }
});