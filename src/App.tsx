import React, { useEffect, useState } from "react";
import { Adsense } from '@ctrl/react-adsense'
import api from "./services/api";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Routes from "./routes";

interface IUser {
name: string;
email: string;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6693BC",
    },
  },
});

function App() {
  useEffect(() => {
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Routes />
      </div>
      <Adsense client= "ca-pub-4742247583682324" slot="6925301458" />
    </ThemeProvider>
  );
}

export default App;
