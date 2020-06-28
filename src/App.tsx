import React from "react";
import { Adsense } from "@ctrl/react-adsense";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Routes from "./routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6693BC",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Routes />
    </div>
    <Adsense client="ca-pub-4742247583682324" slot="6925301458" />
  </ThemeProvider>
);

export default App;
