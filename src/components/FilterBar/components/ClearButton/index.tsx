import React from "react";
import { Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { useFilterBarStyles } from "../../styles";
import { useAction } from "../../../../hooks/useAction";

export const ClearButton: React.FC = (): React.ReactElement => {
  const classes = useFilterBarStyles();
  const { FilterClear } = useAction();

  return (
    <Button
      className={classes.clearBtn}
      startIcon={<ClearIcon className={classes.clearIcon} fontSize="small" />}
      onClick={FilterClear}>
      Clear
    </Button>
  );
};
