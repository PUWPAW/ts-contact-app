import React from "react";
import classNames from "classnames";
import { Button, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useFilterBarStyles } from "../../styles";

type PropsType = {
  classes: ReturnType<typeof useFilterBarStyles>;
  withBtn?: boolean;
  label?: string;
};

export const Search: React.FC<PropsType> = ({
  classes,
  withBtn,
  label,
}: PropsType): React.ReactElement => {
  const { withButton, withoutButton } = classes;

  const inputClasses = classNames({
    [withoutButton]: !withBtn,
    [withButton]: withBtn,
  });

  return (
    <form className={classes.searchForm} onSubmit={(e) => e.preventDefault()}>
      <TextField
        className={inputClasses}
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
