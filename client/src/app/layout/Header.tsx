import { AppBar, FormControlLabel, Switch, Toolbar, Typography } from '@mui/material';

interface Props {
  darkModeChecked: boolean;
  checkDarkMode: () => void;
}

function Header({ darkModeChecked, checkDarkMode }: Props) {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6'>PCStore</Typography>
        <FormControlLabel
          control={<Switch color='default' checked={darkModeChecked} onChange={checkDarkMode} />}
          label='Dark Mode'
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
