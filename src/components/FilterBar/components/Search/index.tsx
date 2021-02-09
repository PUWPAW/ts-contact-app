import React from "react";
import classNames from "classnames";
import { Button, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useFilterBarStyles } from "../../styles";

interface PropsType {
  classes: ReturnType<typeof useFilterBarStyles>;
  withBtn?: boolean;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Search: React.FC<PropsType> = ({
  classes,
  withBtn,
  label,
  value,
  onChange,
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
        value={value}
        onChange={(e) => onChange!(e.target.value)}
      />
      {withBtn && (
        <Button variant="outlined" aria-label="search">
          <SearchIcon />
        </Button>
      )}
    </form>
  );
};
