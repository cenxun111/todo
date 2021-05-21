import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./leftside/Sidebar";
import Hidden from "@material-ui/core/Hidden";
import Center from "./center/Center";
import Rightbar from "./rifhtside/Rightbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} md={3}>
          <Sidebar />
        </Grid>
        <Grid item lg={6} xs={8}>
          <Center />
        </Grid>
        <Hidden mdDown>
          <Grid item xs={3} md={3}>
            <Rightbar />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
