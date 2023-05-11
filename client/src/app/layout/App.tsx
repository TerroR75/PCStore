import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import '../../App.css';
import { Container, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';

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
        <Container>
          <Catalog />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
