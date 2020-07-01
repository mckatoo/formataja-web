import React from "react";
import clsx from "clsx";
import Copyright from "../../components/Copyright";
import useStyles from "../../components/Styles";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Container, Grid, Paper, Box } from "@material-ui/core";
import Preview from "../../components/Preview";

function Dashboard() {
  const classes = useStyles;
  const fixedHeightPaper = clsx(classes().paper, classes().fixedHeight);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    open === true ? setOpen(false) : setOpen(true);
  };
  return (
    <div className={classes().root}>
      <Header toggleDrawer={toggleDrawer} open={open} />
      <Sidebar toggleDrawer={toggleDrawer} open={open} />
      <main className={classes().content}>
        <div className={classes().appBarSpacer} />
        <Container maxWidth="lg" className={classes().container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>{/* <Chart /> */}</Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={6} lg={6}>
              <Preview />
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
