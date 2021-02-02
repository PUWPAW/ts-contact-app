import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ViewButton } from "./components/ViewButton";
import { ReloadButton } from "./components/ReloadButton";
import { useHeaderStyle } from "./styles";

export const Header: React.FC = (): React.ReactElement => {
  const classes = useHeaderStyle();

  return (
    <Grid
      className={classes.root}
      container
      justify="space-between"
      alignItems="center">
      <Grid item md={6} xs={12}>
        <Typography variant="h3" component="h1">
          Contacts
        </Typography>
      </Grid>
      <Grid item md={6} xs={12} container justify="flex-end">
        <ReloadButton classes={classes} />
        <ViewButton />
      </Grid>
    </Grid>
  );
};
