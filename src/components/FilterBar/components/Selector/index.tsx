import React from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";
import { useFilterBarStyles } from "../../styles";
import { options } from "./options";

type PropsType = {
  classes: ReturnType<typeof useFilterBarStyles>;
};

// TODO
// Реакт ругается на этот селект в стрикт моде
// Переделать на обычный селект

export const Selector: React.FC<PropsType> = ({
  classes,
}): React.ReactElement => {
  const [gender, setGender] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value as string);
  };

  return (
    <FormControl className={classes.select} variant="outlined" size="small">
      <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>

      <Select value={gender} onChange={handleChange} label="Gender">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
