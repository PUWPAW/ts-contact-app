import React from "react";
import { Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { useFilterBarStyles } from "../../styles";

export const ClearButton: React.FC = (): React.ReactElement => {
  const classes = useFilterBarStyles();
  return (
    <Button
      className={classes.clearBtn}
      startIcon={<ClearIcon className={classes.clearIcon} fontSize="small" />}>
      Clear
    </Button>
  );
};
