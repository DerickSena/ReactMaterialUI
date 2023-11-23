import { createTheme } from '@mui/material';
import { cyan, yellow} from '@mui/material/colors';


export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: yellow[800],
      dark: yellow[700],
      light: yellow[600],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[800],
      dark: cyan[800],
      light: cyan[800],
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7f6f3',
      paper: '#ffffff',
    }
  }
});