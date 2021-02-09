import React from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";
import { useFilterBarStyles } from "../../styles";
import { options } from "./options";
import { useSelector } from "react-redux";
import { RootStoreType } from "../../../../Store/store";
import { useAction } from "../../../../hooks/useAction";

type PropsType = {
  classes: ReturnType<typeof useFilterBarStyles>;
};

// TODO
// Реакт ругается на этот селект в стрикт моде
// Переделать на обычный селект

export const Selector: React.FC<PropsType> = ({
  classes,
}): React.ReactElement => {
  const { genderValue } = useSelector((state: RootStoreType) => state.filter);
  const { FilterGender } = useAction();

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    FilterGender(e.target.value as string);
  };

  return (
    <FormControl className={classes.select} variant="outlined" size="small">
      <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>

      <Select value={genderValue} onChange={handleChange} label="Gender">
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
