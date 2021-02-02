import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useHeaderStyle = makeStyles((them: Theme) =>
  createStyles({
    root: {
      paddingTop: them.spacing(3),
      marginBottom: them.spacing(3),
    },
    reloadBtn: {
      marginRight: them.spacing(1),
    },
  })
);
