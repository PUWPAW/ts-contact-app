import React from "react";
import TableBody from "@material-ui/core/TableBody";

import { ContactType } from "../../../../Store/actions/ContactsActionTypes";
import { useContactTableStyles } from "../../styles";
import { ContactsRowTable } from "./components/ContactsRowTable";

type PropsType = {
  rows: Array<ContactType>;
  classes?: ReturnType<typeof useContactTableStyles>;
};

export const ContactTablebody: React.FC<PropsType> = ({
  rows,
}): React.ReactElement => {
  return (
    <TableBody>
      {rows.map((row) => (
        <ContactsRowTable key={row.login.uuid} row={row} />
      ))}
    </TableBody>
  );
};
