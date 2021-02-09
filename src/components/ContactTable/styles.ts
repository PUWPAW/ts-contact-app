import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useContactTableStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    table: {
      minWidth: 650,
    },
    tableHeader: {
      fontSize: "0.8rem",
      fontWeight: 600,
    },
  })
);
