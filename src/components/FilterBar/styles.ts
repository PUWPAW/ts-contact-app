import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useFilterBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      padding: theme.spacing(1.5),
      width: "100%",
    },
    withButton: {
      "& > div": {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
    withoutButton: {
      "& > div": {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
      },
    },
    searchForm: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      "& > div": {
        width: "100%",
      },
      "& > button": {
        paddingTop: 7,
        paddingBottom: 7,
        borderLeft: "none",
        color: "#828282",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
    select: {
      minWidth: 120,
    },
    clearBtn: {
      textTransform: "capitalize",
      "& > span": {
        "& > span": {
          marginRight: theme.spacing(0),
        },
      },
    },
    clearIcon: {
      width: "1rem",
      height: "1rem",
    },
  })
);
