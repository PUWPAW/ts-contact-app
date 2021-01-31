import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useSearchStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > div": {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
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
  })
);
