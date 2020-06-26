import React, { useEffect, useState } from "react";
import { Adsense } from '@ctrl/react-adsense'
import api from "./services/api";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    api.post<IUser[]>("/login")
    .then(response => {
      setUsers(response.data);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      { users.map(user => <p>{user.name}</p>) }
        <Button variant="contained" color="primary">
          Olá Mundo
        </Button>
      </div>
      <Adsense client= "ca-pub-4742247583682324" slot="6925301458" />
    </ThemeProvider>
  );
}

export default App;
