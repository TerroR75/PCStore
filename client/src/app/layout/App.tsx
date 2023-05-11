import Header from './Header';
import '../../App.css';
import { Container, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: darkMode ? '#121212' : '#eaeaea',
      },
    },
  });

  function changeDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <CssBaseline />
        <Header darkModeChecked={darkMode} checkDarkMode={changeDarkMode} />
        <Container sx={{ mt: 8 }}>
          <Outlet />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
