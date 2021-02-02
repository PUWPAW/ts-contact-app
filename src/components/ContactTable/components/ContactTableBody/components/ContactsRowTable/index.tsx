import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { ContactType } from "../../../../../../Store/actions/ContactsActionTypes";
import { nat } from "../../../../nationality";

type PropsType = {
  row: ContactType;
};

// TODO
// Разобраться с enum

export const ContactsRowTable: React.FC<PropsType> = ({
  row,
}): React.ReactElement => {
  return (
    <TableRow>
      <TableCell align="center">
        <Avatar alt={row.name.first} src={row.picture.thumbnail} />
      </TableCell>

      <TableCell align="left">
        <Typography>
          {row.name.title} {row.name.first} {row.name.last}
        </Typography>
      </TableCell>

      <TableCell align="left">
        <Typography>{row.dob.age}</Typography>
      </TableCell>

      <TableCell align="left">
        <Typography>{row.email}</Typography>
      </TableCell>

      <TableCell align="left">
        <Typography noWrap>{row.phone}</Typography>
      </TableCell>

      <TableCell align="left">
        <Typography>/{row.location.country}/</Typography>
        <Typography>
          {row.location.street.number} {row.location.street.name},
        </Typography>
        <Typography>
          {row.location.city}, {row.location.state} {row.location.postcode}
        </Typography>
      </TableCell>

      <TableCell align="right">
        <Typography>{nat[row.nat]}</Typography>
      </TableCell>
    </TableRow>
  );
};
