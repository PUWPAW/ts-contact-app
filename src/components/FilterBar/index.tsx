import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Search } from "./components/Search";
import { Selector } from "./components/Selector";
import { useFilterBarStyles } from "./styles";
import { ClearButton } from "./components/ClearButton";

export const FilterBar: React.FC = (): React.ReactElement => {
  const classes = useFilterBarStyles();

  return (
    <Grid className={classes.root} container>
      <Paper className={classes.paper} elevation={3}>
        <Grid item container md={12}>
          <Grid item md={4} xs={12}>
            <Search label="Search by full name" withBtn classes={classes} />
          </Grid>
          <Grid item md={2} xs={12} container justify="center">
            <Selector classes={classes} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Search label="Nationality" classes={classes} />
          </Grid>
          <Grid item md={3} xs={12} container justify="flex-end">
            <ClearButton />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
