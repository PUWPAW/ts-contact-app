import React from "react";
import TableBody from "@material-ui/core/TableBody";

import { useContactTableStyles } from "../../styles";
import { ContactsRowTable } from "./components/ContactsRowTable";

import { FilterData } from "../../utils/filterData";
import { TableRow, TableCell, Typography } from "@material-ui/core";

type PropsType = {
  classes?: ReturnType<typeof useContactTableStyles>;
};

export const ContactTablebody: React.FC<PropsType> = (): React.ReactElement => {
  const filteredData = FilterData();

  return (
    <TableBody>
      {filteredData.length !== 0 ? (
        filteredData.map((row) => (
          <ContactsRowTable key={row.login.uuid} row={row} />
        ))
      ) : (
        <TableRow>
          <TableCell align="left">
            <Typography>Таких данных нет!</Typography>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};
