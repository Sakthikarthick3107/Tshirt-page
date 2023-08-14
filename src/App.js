import CssBaseline from '@mui/material/CssBaseline';
import NavigationBar from './components/NavigationBar';
import { ThemeProvider } from '@emotion/react';
import light from './themes/light';
import GokuOversized from './components/GokuOversized';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={light}>
          <CssBaseline/>
          <NavigationBar/>
          <GokuOversized/>
          <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
