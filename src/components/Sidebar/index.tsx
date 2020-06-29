import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "../Styles";
import { Drawer, Divider, List } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { mainListItems, secondaryListItems } from "./listItems";

export default function Sidebar(props: any) {
  const classes = useStyles();
  const open = props.open;
  const toggleDrawer = props.toggleDrawer

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
}
