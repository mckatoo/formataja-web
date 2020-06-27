import React from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { ErrorOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

function ErrorPage() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ErrorOutline />
        </Avatar>
        <Typography component="h1" variant="h5">
          Page not found!
        </Typography>
      </div>
    </Container>
  );
}

export default ErrorPage;
