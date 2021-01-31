import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Search } from "../Search";
import { Selector } from "../Selector";
import { useFilterBarStyles } from "./style";

// TODO
// Сделать кнопку сброса фильтра
export const FilterBar: React.FC = (): React.ReactElement => {
  const classes = useFilterBarStyles();

  return (
    <Grid className={classes.root} container>
      <Paper className={classes.paper} elevation={3}>
        <Grid item container md={12}>
          <Grid item md={4}>
            <Search label="Search by full name" withBtn />
          </Grid>
          <Grid item md={2}>
            <Selector />
          </Grid>
          <Grid item md={3}>
            <Search label="Nationality" />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
