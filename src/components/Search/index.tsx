import React from "react";
import { Button, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useSearchStyles } from "./style";

type PropsType = {
  withBtn?: boolean;
  label?: string;
};

export const Search: React.FC<PropsType> = ({
  withBtn,
  label,
}: PropsType): React.ReactElement => {
  const classes = useSearchStyles();

  return (
    <form className={classes.searchForm} onSubmit={(e) => e.preventDefault()}>
      <TextField
        className={classes.root}
        id="outlined-basic"
        label={label ? label : "Search..."}
        variant="outlined"
        size="small"
      />
      {withBtn && (
        <Button variant="outlined" aria-label="search">
          <SearchIcon />
        </Button>
      )}
    </form>
  );
};
