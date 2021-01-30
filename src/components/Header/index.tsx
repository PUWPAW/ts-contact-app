import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Typography,
} from "@material-ui/core";
import { ViewButton } from "../ViewButton";
import { ReloadButton } from "../ReloadButton";

export const useHeaderStyle = makeStyles((them: Theme) =>
  createStyles({
    root: {
      paddingTop: them.spacing(2),
    },
    reloadBtn: {
      marginRight: them.spacing(1),
      border: "1px solid rgba(0, 0, 0, 0.2)",
    },
  })
);

export const Header: React.FC = (): React.ReactElement => {
  const classes = useHeaderStyle();

  return (
    <Grid
      className={classes.root}
      container
      justify="space-between"
      alignItems="center">
      <Grid item md={6} xs={12}>
        <Typography variant="h3" component="h1" gutterBottom>
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
