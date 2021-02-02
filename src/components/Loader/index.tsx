import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useLoaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "block",
      margin: "0 auto",
      marginTop: theme.spacing(5),
    },
  })
);

export const Loader = () => {
  const classes = useLoaderStyles();
  return <CircularProgress className={classes.root} />;
};
