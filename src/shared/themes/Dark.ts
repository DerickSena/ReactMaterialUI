import { createTheme } from '@mui/material';
import { green} from '@mui/material/colors';


export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#e8f5e9',
            dark: '#e8f5e9',
            light: '#e8f5e9',
            contrastText: '#000000',
        },
        secondary: {
            main: green[800] ,
            dark: green[800],
            light: green[800],
            contrastText: '#000000'
        },
        background: {
            default:'#303134' ,
            paper:'#202124' ,
        }
    }
});