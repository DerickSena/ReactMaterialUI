import { Avatar, Divider, Drawer , Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme} from '@mui/material';
import { Box} from '@mui/system';
interface IMenuLateral{
    children: React.ReactNode
}

export const MenuLateral:React.FC<IMenuLateral> = ({children})=>{
  const theme = useTheme();
  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column"  >
          
          <Box width="100%" height={theme.spacing(15)} display="flex" alignItems="center" justifyContent="center">
            <Avatar 
              sx={{height:theme.spacing(12) , width: theme.spacing(12)}}
              src="https://i.pinimg.com/564x/f2/99/34/f29934072952b077ca21618afb1122f0.jpg"
            />
          </Box>
          <Divider/>

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    home
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial"/>
              </ListItemButton>
            </List>
          </Box>

 
        </Box>
        
      </Drawer>
      <Box height="100vh"  marginLeft={theme.spacing(177)}>
        {children}
      </Box>
        
    </>
  );
};