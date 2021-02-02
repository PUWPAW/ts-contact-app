import React from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

type PropsType = {
  message: string;
};

const useErrorStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
    },
  })
);

export const Error: React.FC<PropsType> = ({ message }): React.ReactElement => {
  const classes = useErrorStyles();

  return (
    <Typography className={classes.root} align="center" variant="h3">
      {message}
    </Typography>
  );
};
