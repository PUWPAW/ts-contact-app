import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { useContactTableStyles } from "../../styles";

type PropsType = {
  classes: ReturnType<typeof useContactTableStyles>;
};

const titles: string[] = [
  "Avatar",
  "FullName",
  "Birthday",
  "Email",
  "Phone",
  "Location",
  "Nationality",
];

export const ContactTableHeader: React.FC<PropsType> = ({
  classes,
}): React.ReactElement => {
  return (
    <TableHead>
      <TableRow>
        {titles.map((title, index) => (
          <TableCell key={`${title}-${index}`}>
            <Typography className={classes.tableHeader}>{title}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
