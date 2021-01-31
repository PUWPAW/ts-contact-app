import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";

type OptionsType = {
  id: number;
  value: string;
  title: string;
};

const options: Array<OptionsType> = [
  {
    id: 0,
    value: "male",
    title: "Male",
  },
  {
    id: 1,
    value: "female",
    title: "Female",
  },
];

const useSelectorStyle = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginLeft: theme.spacing(1),
      minWidth: 120,
    },
  })
);

// TODO
// Реакт ругается на этот селет в стрикт моде
// Переделать на обычный селект

export const Selector: React.FC = (): React.ReactElement => {
  const [gender, setGender] = React.useState("");
  const classes = useSelectorStyle();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value as string);
  };

  return (
    <FormControl
      className={classes.formControl}
      variant="outlined"
      size="small">
      <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
      <Select value={gender} onChange={handleChange} label="Gender">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option: OptionsType) => (
          <MenuItem key={option.id} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
