import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, FormControlLabel, IconButton, List, ListItem, Switch, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

interface Props {
  darkModeChecked: boolean;
  checkDarkMode: () => void;
}
const centerLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
];
const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
];

const navStyles = {
  textDecoration: 'none',
  color: 'inherit',
  typography: 'h6',
  '&:hover': { color: 'grey.500' },
  '&.active': { color: 'text.secondary' },
};

function Header({ darkModeChecked, checkDarkMode }: Props) {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box display='flex' alignItems='center' gap={2}>
          <Typography component={NavLink} to='/' variant='h6' sx={navStyles}>
            PC Store
          </Typography>
          <FormControlLabel
            control={<Switch color='default' checked={darkModeChecked} onChange={checkDarkMode} />}
            label='Dark Mode'
          />
        </Box>

        <List sx={{ display: 'flex' }}>
          {centerLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display='flex' alignItems='center'>
          <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
            <Badge badgeContent='4' color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
