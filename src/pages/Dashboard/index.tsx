import React from "react";
import clsx from "clsx";
import Copyright from "../../components/Copyright";
import useStyles from "../../components/Styles";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Container, Grid, Paper, Box } from "@material-ui/core";

function Dashboard() {
  const classes = useStyles;
  const fixedHeightPaper = clsx(classes().paper, classes().fixedHeight);
  return (
    <div className={classes().root}>
      <Header />
      <Sidebar />
      <main className={classes().content}>
        <div className={classes().appBarSpacer} />
        <Container maxWidth="lg" className={classes().container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>{/* <Chart /> */}</Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>{/* <Deposits /> */}</Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes().paper}>{/* <Orders /> */}</Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
