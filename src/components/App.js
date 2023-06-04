import React, {useState} from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Login from "components/pages/Login";
import Home from "components/pages/Home";
import LightTheme from 'themes/light';
import DarkTheme from 'themes/dark';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${props => props.theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(currentThemeState => currentThemeState.id === 'light' ? DarkTheme : LightTheme);
    }}}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
